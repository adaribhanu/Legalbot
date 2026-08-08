from pydantic import BaseModel


class ForumRequest(BaseModel):
    state: str
    city: str = ""
    amount: float


class ForumResponse(BaseModel):
    forum: str
    guidance: str