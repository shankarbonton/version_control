from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI CRUD"
    API_V1_STR: str = "/api/v1"
    SQLALCHEMY_DATABASE_URI: str = "sqlite:///./sql_app.db"

    class Config:
        case_sensitive = True

settings = Settings()
