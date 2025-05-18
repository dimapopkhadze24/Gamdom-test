// * UI Components
import { Button, Typography, Loader, Flex } from "@/ui";
// * API
import {
  useAddGameBySportReq,
  useGetGamesBySportReq,
} from "@/api/requests/games-requests";
// * Hooks
import { useParams } from "@tanstack/react-router";
// * Components
import BettingCardLayout from "../common/betting-card-layout/BettingCardLayout";

const SportsComponent = () => {
  const { sportSlug } = useParams({ from: "/$sportSlug" });
  const { data } = useGetGamesBySportReq({ sport: sportSlug });
  const { mutate: addGame, isPending } = useAddGameBySportReq();

  const onAddGameHandler = () => {
    addGame();
  };

  if (!data) return <Loader />;

  return (
    <Flex justify="center" gap={32}>
      <Flex direction="row" justify="space-between">
        <Typography variant="h2" color="light700">
          Bet For {sportSlug}
        </Typography>
        <Button size="large" onClick={onAddGameHandler} disabled={isPending}>
          Add Game
        </Button>
      </Flex>
      <BettingCardLayout games={data} />
    </Flex>
  );
};

export default SportsComponent;
