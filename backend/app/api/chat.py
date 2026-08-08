from fastapi import APIRouter

from app.schemas.chat_schema import ChatRequest, ChatResponse
from app.services.rag_service import RAGService

router = APIRouter()


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    answer = RAGService.ask(request.question)

    return ChatResponse(answer=answer)