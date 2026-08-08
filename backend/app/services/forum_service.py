from app.models.forum import ForumRequest


class ForumService:

    @staticmethod
    def find_forum(data: ForumRequest):

        amount = data.claim_amount

        if amount <= 5000000:
            forum = "District Consumer Disputes Redressal Commission"
            jurisdiction = "Up to ₹50 Lakh"

        elif amount <= 20000000:
            forum = "State Consumer Disputes Redressal Commission"
            jurisdiction = "₹50 Lakh to ₹2 Crore"

        else:
            forum = "National Consumer Disputes Redressal Commission"
            jurisdiction = "Above ₹2 Crore"

        return {
            "forum": forum,
            "address": f"{data.district}, {data.state}",
            "jurisdiction": jurisdiction,
        }