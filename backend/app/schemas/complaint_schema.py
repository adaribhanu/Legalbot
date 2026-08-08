from pydantic import BaseModel


class ComplaintRequest(BaseModel):
    name: str
    seller: str
    product: str
    order_id: str
    issue: str
    resolution: str


class ComplaintResponse(BaseModel):
    complaint: str