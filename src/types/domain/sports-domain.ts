export interface SportI {
  sportId: number;
  sport: string;
  viewOrder: number;
  providerCode: string;
  liveMatchesCount: number;
  isESport: "N" | "Y";
}

export type SportType = "Soccer" | "Basketball" | "Tennis" | "Baseball";
