// * UI Components
import { Flex, Typography } from "@/ui";
// * Types
import { OddsCardI } from "@/types";
// * Hooks
import { useBetsStore } from "@/store/bets-store";
// * Styles
import styled from "styled-components";

const OddsCard: React.FC<OddsCardI> = (bet) => {
  const { Locality, WebQuote, EventOfferId } = bet;
  const { toggleBet, bets } = useBetsStore();
  const isSelected = bets.some((bet) => bet.EventOfferId === EventOfferId);
  return (
    <OddsCardStyled
      onClick={() => toggleBet(bet)}
      direction="row"
      gap={32}
      justify="space-between"
      isSelected={isSelected}
    >
      <Typography variant="h4">{Locality}</Typography>
      <Typography
        className="web-quote"
        variant="h4"
        color={isSelected ? "light500" : "light700"}
      >
        {WebQuote}
      </Typography>
    </OddsCardStyled>
  );
};

export default OddsCard;

const OddsCardStyled = styled(Flex)<{ isSelected: boolean }>`
  background-color: var(--primary-dark-color-700);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ isSelected }) =>
    isSelected
      ? "var(--primary-brand-color-main)"
      : "var(--primary-dark-color-700)"};
  ${({ isSelected }) =>
    !isSelected &&
    `
    &:hover {
      .web-quote {
        color: var(--primary-brand-color-main);
      }
    }
  `}
`;
