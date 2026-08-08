import api from "@/lib/api";

export interface ChatResponse {
  answer: string;
}

export async function sendChatMessage(
  question: string
): Promise<ChatResponse> {

  const response = await api.post(
    "/chat/",
    {
      question,
    }
  );

  return response.data;

}