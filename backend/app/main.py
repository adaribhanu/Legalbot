from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.extract import router as extract_router
from app.api.chat import router as chat_router
from app.api.complaint import router as complaint_router
from app.api.forum import router as forum_router

app = FastAPI(
    title="LegalBot API",
    version="1.0.0",
    description="AI-powered Consumer Legal Assistant"
)

app.include_router(
    extract_router,
    prefix="/extract-case",
    tags=["Case Extraction"],
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Chat API
app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"],
)

# Complaint Generator API
app.include_router(
    complaint_router,
    prefix="/generate-complaint",
    tags=["Complaint"],
)

# Consumer Forum API
app.include_router(
    forum_router,
    prefix="/forum",
    tags=["Forum"],
)

# Health Check
@app.get("/")
def root():
    return {
        "message": "LegalBot API Running",
        "status": "healthy",
        "version": "1.0.0",
    }