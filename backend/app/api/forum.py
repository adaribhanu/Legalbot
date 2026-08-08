from fastapi import APIRouter

from app.models.forum import (
    ForumRequest,
    ForumResponse,
)

from app.services.forum_service import ForumService

router = APIRouter()


@router.post(
    "/",
    response_model=ForumResponse,
)
def forum(request: ForumRequest):

    result = ForumService.find_forum(request)

    return ForumResponse(**result)