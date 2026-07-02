from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.config import settings
from app.database import get_db
from app.models import Lead
from app.schemas import LeadResponse

router = APIRouter(prefix="/api/admin", tags=["admin"])


def verify_admin_key(x_admin_api_key: str | None = Header(default=None)) -> None:
    if not x_admin_api_key or x_admin_api_key != settings.admin_api_key:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid admin API key"
        )


@router.get(
    "/leads",
    response_model=list[LeadResponse],
    dependencies=[Depends(verify_admin_key)]
)
async def list_leads(db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Lead).order_by(Lead.created_at.desc()).limit(200)
    )

    return list(result.scalars().all())
