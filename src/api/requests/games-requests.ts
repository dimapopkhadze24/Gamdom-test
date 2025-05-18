import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addGameService,
  getFeaturedGamesService,
  getGamesBySportService,
  queryClient,
} from "..";
import { GetGamesBySportReqI, GetGamesBySportResI } from "@/types";
import { useParams } from "@tanstack/react-router";

export const useGetFeaturedGamesReq = () => {
  return useQuery({
    queryKey: ["useGetFeaturedGamesReq"],
    queryFn: getFeaturedGamesService,
  });
};

export const useGetGamesBySportReq = (req: GetGamesBySportReqI) => {
  return useQuery({
    queryKey: ["useGetGamesBySportReq", req.sport],
    queryFn: () => getGamesBySportService(req),
    select: (data) => {
      return data.filter((game) => game.Sport.toLowerCase() === req.sport);
    },
    enabled: !!req.sport,
  });
};

export const useAddGameBySportReq = () => {
  const { sportSlug } = useParams({ from: "/$sportSlug" });

  return useMutation({
    mutationFn: () => addGameService({ sport: sportSlug }),
    onSuccess: (res) => {
      queryClient.setQueryData(
        ["useGetGamesBySportReq", sportSlug],
        (oldData: GetGamesBySportResI[]) => {
          console.log(oldData);

          return [res, ...oldData];
        }
      );
    },
  });
};
