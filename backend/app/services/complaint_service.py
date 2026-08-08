from app.services.gemini_service import generate_response


class ComplaintService:

    @staticmethod
    def generate(data):

        prompt = f"""
Generate a formal consumer complaint under the Consumer Protection Act, 2019.

Consumer Name:
{data.consumer_name}

Email:
{data.email}

Phone:
{data.phone}

Seller:
{data.seller}

Product:
{data.product}

Issue:
{data.issue}

Facts:
{data.facts}

Relief Requested:
{data.relief}

Return ONLY the complaint.

Use the following structure:

1. Before the Consumer Commission
2. Complainant
3. Opposite Party
4. Facts of the Case
5. Grounds
6. Relief Sought
7. Verification

Do not use Markdown.
"""

        return generate_response(
            prompt,
            "Indian Consumer Protection Act, 2019"
        )