from pydantic import BaseModel


class ForumRequest(BaseModel):
    state: str
    district: str
    claim_amount: float


class ForumResponse(BaseModel):
    forum: str
    address: str
    jurisdiction: str