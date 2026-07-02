import html

import httpx

from app.config import settings
from app.schemas import ContactRequest


def build_telegram_message(payload: ContactRequest) -> str:
    safe_name = html.escape(payload.name)
    safe_contact = html.escape(payload.contact)
    safe_type = html.escape(payload.project_type)
    safe_budget = html.escape(payload.budget or "Не указан")
    safe_message = html.escape(payload.message)

    return (
        "🚀 <b>Новая заявка с сайта</b>\n\n"
        f"👤 <b>Имя:</b> {safe_name}\n"
        f"📞 <b>Контакт:</b> {safe_contact}\n"
        f"🧩 <b>Тип проекта:</b> {safe_type}\n"
        f"💰 <b>Бюджет:</b> {safe_budget}\n\n"
        f"💬 <b>Задача:</b>\n{safe_message}"
    )


async def send_telegram_notification(payload: ContactRequest) -> None:
    if not settings.telegram_bot_token or not settings.telegram_chat_id:
        return

    url = f"https://api.telegram.org/bot{settings.telegram_bot_token}/sendMessage"

    try:
        async with httpx.AsyncClient(timeout=10) as client:
            await client.post(
                url,
                json={
                    "chat_id": settings.telegram_chat_id,
                    "text": build_telegram_message(payload),
                    "parse_mode": "HTML",
                    "disable_web_page_preview": True
                }
            )
    except Exception:
        return


async def get_ai_answer(message: str) -> str:
    if not settings.openai_api_key:
        return (
            "По описанию задачи можно начать с MVP: лендинг или веб-платформа, форма заявок, "
            "админ-панель и AI-ассистент для первичной консультации. Следующий шаг — определить "
            "тип пользователей, основные сценарии и интеграции: Telegram, CRM, база данных, платежи или аналитика."
        )

    try:
        async with httpx.AsyncClient(timeout=25) as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {settings.openai_api_key}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": "gpt-4o-mini",
                    "messages": [
                        {
                            "role": "system",
                            "content": "Ты AI-консультант IT-компании. Отвечай по-русски, кратко, профессионально. Подбирай digital-решение: сайт, мобильное приложение, CRM, AI-бот, backend или автоматизация."
                        },
                        {
                            "role": "user",
                            "content": message
                        }
                    ],
                    "temperature": 0.4
                }
            )

            response.raise_for_status()
            data = response.json()

            return data["choices"][0]["message"]["content"]
    except Exception:
        return (
            "AI временно недоступен. Но по вашей задаче можно начать с анализа процессов, "
            "MVP-структуры и списка интеграций."
        )
