from pydantic import BaseModel


class ProgressCreate(BaseModel):
    user_id: int
    lesson_id: int
    score: int


class ProgressResponse(BaseModel):
    id: int
    user_id: int
    lesson_id: int
    score: int
    completed: bool

    class Config:
        from_attributes = True