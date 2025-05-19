// * UI Components
import { BettingCardStyled, Flex, Typography } from "@/ui";
// * Assets
import { CalendarIcon, ClockIcon } from "@/assets/icons";
// * Types
import { BettingCardI } from "@/types";
// * Hooks And Utils
import { format } from "date-fns";
// * Components
import OddsCard from "../odds-card/OddsCard";

const BettingCard: React.FC<BettingCardI> = ({
  HomeTeamCode,
  AwayTeamCode,
  Competitors,
  TournamentInstance,
  EventTime,
  Markets,
}) => {
  const homeTeam = Competitors.find(
    (competitor) => competitor.Id === HomeTeamCode
  );
  const awayTeam = Competitors.find(
    (competitor) => competitor.Id === AwayTeamCode
  );

  const matchDay = format(new Date(EventTime), "EEEE");
  const matchTime = format(new Date(EventTime), "HH:mm");
  const market1x2 = Markets.find((market) => market.Modality === "1x2");

  return (
    <BettingCardStyled gap={16}>
      <Typography variant="h3">{TournamentInstance}</Typography>
      <Flex gap={8}>
        <Flex justify="space-between" direction="row">
          <Typography>{homeTeam?.Name}</Typography>
          <Flex direction="row" align="center" gap={4}>
            <Typography color="light700">{matchDay}</Typography>
            <CalendarIcon width={16} height={16} />
          </Flex>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Typography>{awayTeam?.Name}</Typography>
          <Flex direction="row" align="center" gap={4}>
            <Typography color="light700">{matchTime}</Typography>
            <ClockIcon width={16} height={16} />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="row" gap={8} justify="space-between">
        {market1x2?.Offers.map((offer) => (
          <OddsCard key={offer.EventOfferId} {...offer} />
        ))}
      </Flex>
    </BettingCardStyled>
  );
};

export default BettingCard;
