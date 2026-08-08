from pathlib import Path

from app.rag.chroma_manager import collection
from app.services.embedding_service import get_embedding

folder = Path("legal_documents")

for file in folder.glob("*.txt"):

    text = file.read_text(encoding="utf-8").strip()

    # Skip empty files
    if not text:
        print(f"Skipping empty file: {file.name}")
        continue

    embedding = get_embedding(text)

    collection.upsert(
        ids=[file.stem],
        documents=[text],
        embeddings=[embedding],
    )

    print(f"Indexed: {file.name}")

print("Knowledge Base Loaded Successfully!")