import React, { useEffect, useMemo, useState } from "react";
import { useSelectedRouteContext } from "../../Contexts/SelectedRouteContext";
import { RoutesContainer } from "./HomePage.styles";
import DisplayTile from "../../Common/Display/DisplayTile/DisplayTile";

interface Route {
  routeName: string;
  routeColor: string;
  textColor: string;
  routeType: string;
}

const HomePage: React.FC = () => {
  const [routesData, setRoutesData] = useState<Route[]>();
  const { setSelectedRoute } = useSelectedRouteContext();

  useEffect(() => {
    getRoutesData();
  }, []);

  async function getRoutesData() {
    const data = await fetch("routes");
    const response = await data.json();
    setRoutesData(response);
  }

  const sortedRoutesData = useMemo(() => {
    // Sort all routes alphabetically. Utilize useMemo in case data grows
    // down the line so that we do not slow down the app with a costly operation.
    if (routesData !== undefined) {
      return routesData.sort((a, b) => {
        if (a.routeName.toLowerCase() < b.routeName.toLowerCase()) {
          return -1;
        }
        return 1;
      });
    }
  }, [routesData]);

  return (
    <RoutesContainer>
      {sortedRoutesData?.length &&
        sortedRoutesData.map((route) => {
          const args = {
            ...route,
            routeType: route.routeType,
            handleClick: () => {
              setSelectedRoute!(route.routeName);
            },
          };
          return (
            <DisplayTile
              {...args}
              key={route.routeName}
              routeNameAsTextColor={true}
              backgroundAsRouteColor={true}
            />
          );
        })}
    </RoutesContainer>
  );
};

export default HomePage;
