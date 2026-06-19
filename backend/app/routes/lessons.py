from fastapi import APIRouter

router = APIRouter(
    prefix="/lessons",
    tags=["Lessons"]
)

@router.get("/")
def get_lessons():
    return [
        {
            "id": 1,
            "title": "Treble Clef"
        },
        {
            "id": 2,
            "title": "Bass Clef"
        }
    ]