from fastapi import FastAPI
from app.api.api_v1.api import api_router
from app.core.config import settings
from app.db.base import Base
from app.db.session import engine
from app.models import item  # Import models so Alembic/create_all can find them

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

# Mount static directory
app.mount("/static", StaticFiles(directory="app/static"), name="static")

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
def read_root():
    return FileResponse("app/static/index.html")
