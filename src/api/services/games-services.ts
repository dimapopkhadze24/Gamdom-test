import { ENDPOINTS, getAxiosClient } from "@/api";
import {
  AddGameBySportReqI,
  CompetitorI,
  GameI,
  GetFeaturedGamesResI,
  GetGamesBySportReqI,
  GetGamesBySportResI,
  OfferI,
  SportType,
} from "@/types";
import mockCompetitors from "@/assets/data/mock-competitors.json";
import mockOffers from "@/assets/data/mock-offers.json";

const { GET } = ENDPOINTS.GAMES;

export const getFeaturedGamesService: () => Promise<
  GetFeaturedGamesResI[]
> = async () => {
  const response = await getAxiosClient().get(GET);
  const apiGames = response.data;

  // Get games from localStorage
  const localGames = JSON.parse(localStorage.getItem("games") || "[]");

  // Combine API games with local games
  const allGames = [...localGames, ...apiGames];

  return allGames as GetFeaturedGamesResI[];
};

export const getGamesBySportService: (
  req: GetGamesBySportReqI
) => Promise<GetGamesBySportResI[]> = async (req) => {
  const response = await getAxiosClient().get(GET);
  const apiGames = response.data;

  // Get games from localStorage and filter by sport
  const localGames = JSON.parse(localStorage.getItem("games") || "[]").filter(
    (game: GameI) => game.Sport.toLowerCase() === req.sport.toLowerCase()
  );

  // Combine API games with filtered local games
  const allGames = [...localGames, ...apiGames];

  return allGames as GetGamesBySportResI[];
};

export const addGameService: (
  req: AddGameBySportReqI
) => Promise<GameI> = async (req) => {
  const sport = (req.sport.toLowerCase() as SportType) || "Soccer";

  // Get random competitors for the sport
  const sportCompetitors =
    (mockCompetitors as Record<SportType, CompetitorI[]>)[sport] ||
    mockCompetitors.Soccer;
  const shuffledCompetitors = [...sportCompetitors].sort(
    () => Math.random() - 0.5
  );
  const selectedCompetitors = shuffledCompetitors.slice(0, 2);

  // Get offers for the sport
  const sportOffers =
    (mockOffers as Record<SportType, { "1x2": OfferI[] }>)[sport] ||
    mockOffers.Soccer;
  const marketOffers = sportOffers["1x2"];

  // Generate random game data
  const randomGame: GameI = {
    MatchId: Math.floor(Math.random() * 1000000),
    SportId: Math.floor(Math.random() * 100),
    Sport: req.sport,
    SportProviderCode: `SP${Math.floor(Math.random() * 1000)}`,
    HomeTeamCode: selectedCompetitors[0].Id,
    AwayTeamCode: selectedCompetitors[1].Id,
    Country: selectedCompetitors[0].CountryCode,
    CountryCode: selectedCompetitors[0].CountryCode,
    CategoryId: `CAT${Math.floor(Math.random() * 1000)}`,
    Category: "Random Category",
    TournamentProviderCode: `TP${Math.floor(Math.random() * 1000)}`,
    TournamentId: Math.floor(Math.random() * 1000),
    TournamentInstanceId: Math.floor(Math.random() * 1000),
    Status: "Active",
    EventTime: new Date().toISOString(),
    RoundNumber: Math.floor(Math.random() * 10),
    TournamentInstance: "Random Tournament",
    Markets: [
      {
        EventId: Math.floor(Math.random() * 1000000),
        ViewOrder: 5,
        ModalityGroupId: 0,
        Main: "S",
        Modality: "1x2",
        Offers: marketOffers.map(
          (offer: OfferI): OfferI => ({
            ...offer,
            EventOffer:
              offer.EventOffer === "Home"
                ? selectedCompetitors[0].Name
                : offer.EventOffer === "Away"
                  ? selectedCompetitors[1].Name
                  : offer.EventOffer,
          })
        ),
      },
    ],
    Competitors: selectedCompetitors,
  };

  // Get existing games from localStorage or initialize empty array
  const existingGames = JSON.parse(localStorage.getItem("games") || "[]");

  // Add new game to the array
  existingGames.push(randomGame);

  // Save back to localStorage
  localStorage.setItem("games", JSON.stringify(existingGames));

  return randomGame;
};
