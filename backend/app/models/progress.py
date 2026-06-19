from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Boolean
from sqlalchemy import ForeignKey

from app.database.db import Base


class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    lesson_id = Column(
        Integer,
        ForeignKey("lessons.id")
    )

    completed = Column(
        Boolean,
        default=False
    )

    score = Column(Integer, default=0)