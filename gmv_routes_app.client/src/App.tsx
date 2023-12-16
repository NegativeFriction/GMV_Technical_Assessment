import { useEffect, useState } from "react";
import "./App.css";
import RouteButton from "./Common/Display/RouteButton";

interface Route {
  routeName: string;
  routeColor: string;
  textColor: string;
  routeType: string;
}

function App() {
  const [routesData, setRoutesData] = useState<Route[]>();

  useEffect(() => {
    getRoutesData();
  }, []);

  async function getRoutesData() {
    const data = await fetch("routes");
    const response = await data.json();
    setRoutesData(response);
  }

  return (
    <div>
      {routesData?.length &&
        routesData.map((route) => {
          const args = {
            ...route,
            iconName: route.routeType,
            routeType: undefined,
          };
          return (
            <div>
              <span>
                <RouteButton {...args} />
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default App;
