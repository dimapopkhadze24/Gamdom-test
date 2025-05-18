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
    <Grid columns="repeat(3, 1fr)" gap={32}>
      {games?.map((game) => <BettingCard key={game.MatchId} {...game} />)}
    </Grid>
  );
};

export default BettingCardLayout;
