from fastapi import APIRouter

from app.schemas import ChatRequest, ChatResponse
from app.services import get_ai_answer

router = APIRouter(prefix="/api", tags=["ai"])


@router.post("/ai-chat", response_model=ChatResponse)
async def ai_chat(payload: ChatRequest):
    answer = await get_ai_answer(payload.message)

    return ChatResponse(answer=answer)
