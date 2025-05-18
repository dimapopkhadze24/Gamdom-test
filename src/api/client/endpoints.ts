export const PROD_API_ENDPOINTS = {
  SPORTS: {
    GET: "/sports",
  },
  GAMES: {
    GET: "/games",
  },
} as const;

export const MOCK_API_ENDPOINTS = {
  SPORTS: {
    GET: "/src/assets/data/sports.json",
  },
  GAMES: {
    GET: "/src/assets/data/games.json",
  },
} as const;

export const ENDPOINTS = {
  ...(process.env.NODE_ENV === "development"
    ? MOCK_API_ENDPOINTS
    : PROD_API_ENDPOINTS),
} as const;
