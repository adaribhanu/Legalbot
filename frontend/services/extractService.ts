import api from "@/lib/api";

export interface ExtractRequest {
  conversation: string;
}

export interface ExtractResponse {
  consumer_name: string;
  seller: string;
  product: string;
  issue: string;
  facts: string;
  relief: string;
}

export async function extractCase(
  conversation: string
): Promise<ExtractResponse> {
  const response = await api.post("/extract-case/", {
    conversation,
  });

  return response.data;
}