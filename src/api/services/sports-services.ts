import { ENDPOINTS, getAxiosClient } from "@/api";
import { GetSportsResI } from "@/types";

const { GET } = ENDPOINTS.SPORTS;

export const getSportsService: () => Promise<GetSportsResI[]> = async () => {
  const response = await getAxiosClient().get(GET);
  return response.data;
};
