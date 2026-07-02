// Icons are referenced by string id here; components will map ids to
// actual icon components where rendering happens to avoid passing
// functions from server to client.

export const services = [
  {
    slug: "ai-assistants",
    icon: "bot",
    title: "AI-ассистенты",
    short: "AI-боты для продаж, поддержки и консультаций.",
    text: "Проектируем и внедряем AI-ассистентов, которые отвечают клиентам, собирают заявки, помогают выбирать услуги и передают диалог менеджеру.",
    bullets: ["AI-чат на сайте", "Telegram/WhatsApp сценарии", "Интеграция с CRM", "FAQ и база знаний"]
  },
  {
    slug: "web-platforms",
    icon: "code2",
    title: "Веб-платформы",
    short: "Лендинги, SaaS, кабинеты и корпоративные порталы.",
    text: "Разрабатываем быстрые сайты, платформы, личные кабинеты, внутренние системы и админ-панели с сильным UI/UX.",
    bullets: ["Next.js frontend", "SEO и скорость", "Админ-панель", "Адаптив под mobile-first"]
  },
  {
    slug: "mobile-apps",
    icon: "smartphone",
    title: "Мобильные приложения",
    short: "MVP и приложения для iOS/Android.",
    text: "Создаем мобильные MVP и приложения с авторизацией, профилями, картами, платежами, уведомлениями и аналитикой.",
    bullets: ["React Native / Flutter", "iOS и Android", "Push-уведомления", "API-интеграции"]
  },
  {
    slug: "business-automation",
    icon: "workflow",
    title: "Автоматизация бизнеса",
    short: "Снижаем ручную работу и ускоряем процессы.",
    text: "Автоматизируем заявки, статусы, уведомления, отчеты, внутренние процессы и связку сервисов между собой.",
    bullets: ["Telegram уведомления", "CRM процессы", "Отчеты", "Интеграции сервисов"]
  },
  {
    slug: "backend-cloud",
    icon: "cloud",
    title: "Backend & Cloud",
    short: "API, базы данных, серверы и масштабирование.",
    text: "Проектируем backend-архитектуру, базы данных, API, деплой, мониторинг и инфраструктуру для стабильной работы продукта.",
    bullets: ["FastAPI / Node.js", "PostgreSQL", "Docker", "Cloud deploy"]
  },
  {
    slug: "security",
    icon: "lockkeyhole",
    title: "Security-first разработка",
    short: "Безопасная архитектура и контроль доступа.",
    text: "Закладываем роли пользователей, защиту API, валидацию данных, безопасное хранение ключей и контроль доступа к системе.",
    bullets: ["RBAC", "API protection", "Rate limit", "Secure env"]
  }
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "OpenAI API",
  "Telegram Bot API",
  "Vercel",
  "Render",
  "Railway",
  "Figma"
];

export const projects = [
  {
    slug: "ai-service-assistant",
    title: "AI-ассистент для сервиса",
    category: "AI Automation",
    text: "Ассистент консультирует клиентов, отвечает на частые вопросы, собирает заявку и передает ее менеджеру.",
    result: "Сокращение времени ответа и меньше ручной работы для команды.",
    stack: ["FastAPI", "OpenAI", "Telegram", "PostgreSQL"]
  },
  {
    slug: "lead-crm",
    title: "CRM для заявок",
    category: "Business System",
    text: "Внутренняя система для обработки лидов, статусов, комментариев, источников заявок и аналитики.",
    result: "Прозрачная воронка продаж и контроль каждого обращения.",
    stack: ["Next.js", "PostgreSQL", "Supabase", "Docker"]
  },
  {
    slug: "mobile-mvp",
    title: "Мобильное MVP",
    category: "Mobile App",
    text: "Прототип мобильного приложения с авторизацией, профилем пользователя, картой, заявками и уведомлениями.",
    result: "Быстрый запуск первой версии для проверки идеи на рынке.",
    stack: ["React Native", "FastAPI", "Supabase", "API"]
  }
];

export const processSteps = [
  {
    icon: "message-square-text",
    title: "01. Анализ",
    text: "Разбираем задачу, аудиторию, процессы, ограничения и бизнес-цель проекта."
  },
  {
    icon: "braces",
    title: "02. Проектирование",
    text: "Готовим структуру, UX-сценарии, архитектуру API, базу данных и roadmap MVP."
  },
  {
    icon: "rocket",
    title: "03. Разработка",
    text: "Создаем frontend, backend, интеграции, AI-модули и админ-панель."
  },
  {
    icon: "database",
    title: "04. Запуск",
    text: "Тестируем, деплоим, подключаем аналитику, уведомления и поддержку после релиза."
  }
];

export const industries = [
  { icon: "building2", title: "Сервисные компании" },
  { icon: "heartpulse", title: "Медицина и wellness" },
  { icon: "graduationcap", title: "Образование" },
  { icon: "shoppingbag", title: "E-commerce" },
  { icon: "sparkles", title: "Beauty & lifestyle" },
  { icon: "workflow", title: "B2B процессы" }
];

export const faq = [
  {
    question: "Сколько времени занимает запуск MVP?",
    answer: "Зависит от сложности. Обычно лендинг можно запустить быстрее, а MVP с backend, админкой и AI-интеграцией требует поэтапной разработки."
  },
  {
    question: "Можно ли подключить заявки в Telegram?",
    answer: "Да. Backend уже содержит готовую логику для Telegram-уведомлений через переменные TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID."
  },
  {
    question: "Можно ли использовать Supabase?",
    answer: "Да. Supabase PostgreSQL можно использовать как production database, указав connection string в DATABASE_URL."
  },
  {
    question: "Можно ли добавить мультиязычность?",
    answer: "Да. Архитектура Next.js позволяет добавить RU/KZ/EN через отдельные маршруты или библиотеку i18n."
  }
];
