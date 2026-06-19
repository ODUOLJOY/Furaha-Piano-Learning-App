from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from app.database.db import Base


class Lesson(Base):
    __tablename__ = "lessons"

    id = Column(Integer, primary_key=True)

    module = Column(Integer)

    title = Column(String)

    content = Column(Text)

    difficulty = Column(String)