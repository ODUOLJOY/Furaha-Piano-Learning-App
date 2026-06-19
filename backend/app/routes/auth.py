from fastapi import APIRouter

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.get("/")
def auth_home():
    return {
        "message": "Authentication API"
    }

@router.post("/register")
def register():
    return {
        "message": "User registered"
    }

@router.post("/login")
def login():
    return {
        "message": "User logged in"
    }