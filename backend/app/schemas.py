from datetime import datetime

from pydantic import BaseModel, Field


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    contact: str = Field(min_length=5, max_length=160)
    project_type: str = Field(min_length=2, max_length=120)
    budget: str | None = Field(default=None, max_length=120)
    message: str = Field(min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    ok: bool
    message: str


class LeadResponse(BaseModel):
    id: int
    name: str
    contact: str
    project_type: str
    budget: str | None
    message: str
    status: str
    created_at: datetime

    model_config = {"from_attributes": True}


class ChatRequest(BaseModel):
    message: str = Field(min_length=2, max_length=2000)


class ChatResponse(BaseModel):
    answer: str
