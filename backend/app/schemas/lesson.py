from pydantic import BaseModel


class LessonCreate(BaseModel):
    module: int
    title: str
    content: str
    difficulty: str


class LessonResponse(BaseModel):
    id: int
    module: int
    title: str
    content: str
    difficulty: str

    class Config:
        from_attributes = True