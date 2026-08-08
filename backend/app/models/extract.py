from pydantic import BaseModel


class ExtractRequest(BaseModel):
    conversation: str


class ExtractResponse(BaseModel):
    consumer_name: str
    seller: str
    product: str
    issue: str
    facts: str
    relief: str