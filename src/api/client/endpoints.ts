export const PROD_API_ENDPOINTS = {
  SPORTS: {
    GET: "/data/sports.json",
  },
  GAMES: {
    GET: "/data/games.json",
  },
} as const;

export const MOCK_API_ENDPOINTS = {
  SPORTS: {
    GET: "/data/sports.json",
  },
  GAMES: {
    GET: "/data/games.json",
  },
} as const;

export const ENDPOINTS = {
  ...(process.env.NODE_ENV === "development"
    ? MOCK_API_ENDPOINTS
    : PROD_API_ENDPOINTS),
} as const;
