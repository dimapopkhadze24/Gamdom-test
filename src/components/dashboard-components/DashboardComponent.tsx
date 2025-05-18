// * UI Components
import { Loader, Typography, Flex } from "@/ui";
// * API
import { useGetFeaturedGamesReq } from "@/api";
// * Components
import BettingCardLayout from "../common/betting-card-layout/BettingCardLayout";

const DashboardComponent = () => {
  const { data } = useGetFeaturedGamesReq();

  if (!data) return <Loader />;

  return (
    <Flex justify="center" gap={32}>
      <Typography variant="h2" color="light700">
        Featured Games
      </Typography>
      <BettingCardLayout games={data} />
    </Flex>
  );
};

export default DashboardComponent;
