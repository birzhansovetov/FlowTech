from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_db
from app.models import Lead
from app.schemas import ContactRequest, ContactResponse
from app.services import send_telegram_notification

router = APIRouter(prefix="/api", tags=["contact"])


@router.post("/contact", response_model=ContactResponse)
async def create_contact_request(
    payload: ContactRequest,
    db: AsyncSession = Depends(get_db)
):
    lead = Lead(**payload.model_dump())

    db.add(lead)
    await db.commit()

    await send_telegram_notification(payload)

    return ContactResponse(ok=True, message="Заявка успешно отправлена")
