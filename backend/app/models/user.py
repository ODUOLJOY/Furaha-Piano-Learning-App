from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    password = Column(String, nullable=False)

    xp = Column(Integer, default=0)

    level = Column(Integer, default=1)

    streak = Column(Integer, default=0)