import api from "@/lib/api";

export interface ForumRequest {
  state: string;
  district: string;
  claim_amount: number;
}

export interface ForumResponse {
  forum: string;
  address: string;
  jurisdiction: string;
}

export async function findForum(
  data: ForumRequest
): Promise<ForumResponse> {

  const response = await api.post(
    "/forum/",
    data
  );

  return response.data;
}