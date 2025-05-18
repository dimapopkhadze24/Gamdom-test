import { OfferI } from "@/types/domain/market-domain";

export interface BetsStoreI {
  bets: OfferI[];
  toggleBet: (bet: OfferI) => void;
  clearBets: () => void;
}
