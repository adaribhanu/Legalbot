from pydantic import BaseModel


class ComplaintRequest(BaseModel):
    consumer_name: str
    email: str
    phone: str
    seller: str
    product: str
    issue: str
    facts: str
    relief: str


class ComplaintResponse(BaseModel):
    complaint: str