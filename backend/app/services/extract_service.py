import json

from app.services.gemini_service import client, MODEL_NAME


class ExtractService:

    @staticmethod
    def extract(conversation: str):

        prompt = f"""
You are an AI legal assistant.

Extract the following information from the conversation.

Return ONLY valid JSON.

Schema:

{{
    "consumer_name": "",
    "seller": "",
    "product": "",
    "issue": "",
    "facts": "",
    "relief": ""
}}

Conversation:

{conversation}
"""

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )

        text = response.text.strip()

        # Remove markdown if Gemini wraps JSON
        text = text.replace("```json", "").replace("```", "").strip()

        return json.loads(text)