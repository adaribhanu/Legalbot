import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

MODEL_NAME = "gemini-flash-latest"


def generate_response(question, context):
    prompt = f"""
You are LegalBot, an AI legal assistant for India.

Use ONLY the information provided in the context.

If the context contains relevant information, answer clearly in simple English.

Do NOT say "I couldn't find..." unless the context is completely empty.

Context:
{context}

Question:
{question}

Answer:
"""

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
    )

    return response.text