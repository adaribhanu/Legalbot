from app.rag.retriever import retrieve
from app.services.gemini_service import generate_response


class RAGService:

    @staticmethod
    def ask(question: str):

        context = retrieve(question)

        answer = generate_response(question, context)

        return answer