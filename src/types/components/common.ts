import { GameI, OfferI } from "@/types";

export interface BettingCardI extends GameI {}

export interface OddsCardI extends OfferI {}

export interface BettingCardLayoutI {
  games: GameI[];
}
