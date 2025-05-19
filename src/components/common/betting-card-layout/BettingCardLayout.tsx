// * UI Components
import { Flex, Typography, Grid } from "@/ui";
// * Types
import { BettingCardLayoutI } from "@/types";
// * Components
import BettingCard from "../betting-card/BettingCard";

const BettingCardLayout: React.FC<BettingCardLayoutI> = ({ games }) => {
  if (games.length === 0)
    return (
      <Flex justify="center" align="center">
        <Typography variant="h3">No Games Found in this category</Typography>
      </Flex>
    );
  return (
    <Grid
      gap={32}
      columns="repeat(auto-fit, minmax(330px, 1fr))"
      style={{ placeItems: "center" }}
    >
      {games?.map((game) => <BettingCard key={game.MatchId} {...game} />)}
    </Grid>
  );
};

export default BettingCardLayout;
