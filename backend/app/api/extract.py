from fastapi import APIRouter

from app.models.extract import (
    ExtractRequest,
    ExtractResponse,
)

from app.services.extract_service import ExtractService

router = APIRouter()


@router.post(
    "/",
    response_model=ExtractResponse,
)
def extract_case(request: ExtractRequest):

    result = ExtractService.extract(
        request.conversation
    )

    return ExtractResponse(**result)