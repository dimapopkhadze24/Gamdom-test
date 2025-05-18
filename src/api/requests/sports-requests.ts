import { useSuspenseQuery } from "@tanstack/react-query";
import { getSportsService } from "@/api";

export const useGetSportsReq = () => {
  return useSuspenseQuery({
    queryKey: ["useGetSportsReq"],
    queryFn: getSportsService,
  });
};
