from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    APP_NAME = "LegalBot"
    VERSION = "1.0.0"

    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

    CHROMA_DB_PATH = "./chroma_db"

settings = Settings()