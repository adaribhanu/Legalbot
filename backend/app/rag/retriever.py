from app.rag.chroma_manager import collection
from app.services.embedding_service import get_embedding


def retrieve(question: str):

    embedding = get_embedding(question)

    result = collection.query(
        query_embeddings=[embedding],
        n_results=2
    )

    docs = result.get("documents", [[]])[0]

    docs = [doc for doc in docs if doc.strip()]

    return "\n\n".join(docs)