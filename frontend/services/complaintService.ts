import api from "@/lib/api";

export interface ComplaintRequest {
  consumer_name: string;
  email: string;
  phone: string;
  seller: string;
  product: string;
  issue: string;
  facts: string;
  relief: string;
}

export interface ComplaintResponse {
  complaint: string;
}

export async function generateComplaint(
  data: ComplaintRequest
): Promise<ComplaintResponse> {

  const response = await api.post(
    "/generate-complaint/",
    data
  );

  return response.data;
}