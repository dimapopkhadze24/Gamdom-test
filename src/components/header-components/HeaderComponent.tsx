// * UI Components
import { Tab, TabList, TabsContainer } from "@/ui";
// * API
import { useGetSportsReq } from "@/api";
// * Hooks
import { useNavigate, useParams } from "@tanstack/react-router";
import { useCallback } from "react";
// * Components
import HeaderSportIconRenderer from "./components/HeaderSportIconRenderer";

const HeaderComponent = () => {
  const { data } = useGetSportsReq();
  const navigate = useNavigate();
  const { sportSlug } = useParams({ strict: false });

  const isActive = useCallback(
    (sport: string) => {
      return sportSlug?.toLowerCase() === sport.toLowerCase();
    },
    [sportSlug]
  );

  const onTabChangeHandler = (sport: string) => {
    navigate({
      to: "/$sportSlug",
      params: { sportSlug: sport.toLowerCase() },
    });
  };
  console.log(data);

  if (!data) return null;

  return (
    <TabsContainer>
      <TabList>
        {data.map((sport) => (
          <Tab
            key={sport.sportId}
            isActive={isActive(sport.sport)}
            onClick={() => onTabChangeHandler(sport.sport)}
          >
            <HeaderSportIconRenderer iconName={sport.sport} />
            {sport.sport}
          </Tab>
        ))}
      </TabList>
    </TabsContainer>
  );
};

export default HeaderComponent;
