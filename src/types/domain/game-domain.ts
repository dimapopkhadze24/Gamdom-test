import type { CompetitorI } from "./competitors-domain";
import type { MarketI } from "./market-domain";

export interface GameI {
  MatchId: number;
  SportId: number;
  Sport: string;
  SportProviderCode: string;
  HomeTeamCode: string;
  AwayTeamCode: string;
  Country: string;
  CountryCode: string;
  CategoryId: string;
  Category: string;
  TournamentProviderCode: string;
  TournamentId: number;
  TournamentInstanceId: number;
  Status: string;
  EventTime: string;
  RoundNumber: number;
  TournamentInstance: string;
  Markets: MarketI[];
  Competitors: CompetitorI[];
}
