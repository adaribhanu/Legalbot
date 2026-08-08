from fastapi import APIRouter

from app.models.complaint import (
    ComplaintRequest,
    ComplaintResponse,
)

from app.services.complaint_service import ComplaintService

router = APIRouter()


@router.post("/", response_model=ComplaintResponse)
def generate_complaint(
    request: ComplaintRequest,
):

    complaint = ComplaintService.generate(request)

    return ComplaintResponse(
        complaint=complaint
    )