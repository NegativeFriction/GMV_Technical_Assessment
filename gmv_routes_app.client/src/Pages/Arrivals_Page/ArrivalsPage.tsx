import React, { useEffect, useState, useMemo } from "react";
import { useSelectedRouteContext } from "../../Contexts/SelectedRouteContext";
import { ArrivalsContainer } from "./Arrivals.styles";
import DisplayTile from "../../Common/Display/DisplayTile/DisplayTile";

export interface Arrival {
  routeName: string;
  routeType: string;
  textColor: string;
  routeColor: string;
  destinationsData: {
    destinationText: string;
    minutesToArrival: number[];
  }[];
}

const ArrivalsPage: React.FC = () => {
  const [arrivalData, setArrivalData] = useState<Arrival[] | null>(null);
  useEffect(() => {
    getArrivalData();
  }, []);
  const { selectedRoute } = useSelectedRouteContext();

  async function getArrivalData(): Promise<void> {
    const routeNameArg = selectedRoute!.replace(/\s/g, ""); // eliminate all spaces from the route name.
    const data = await fetch(`arrivals/${routeNameArg}`);
    const response = await data.json();
    setArrivalData(response);
  }

  const formattedArrivalsData = useMemo(() => {
    // sort all of our data on the arrivals for a given route into a series of arguments for Arrival Tiles.
    // As the amount of data scales, this function can also become increasingly costly. Using the useMemo hook
    // to avoid recalculations on page actions. If page performance flags due to too many values to sort,
    // it the next step would be to either offload this functionality to a service worker OR to have the back end sort the data,
    // depending on resources available/assumed available.
    if (arrivalData) {
      const allArrivalsData = arrivalData.flatMap((arrival) => {
        return arrival.destinationsData.flatMap((destination) => {
          return destination.minutesToArrival.map((minute) => {
            return {
              destinationText: destination.destinationText,
              minutesToArrival: minute,
              routeName: selectedRoute!,
              routeType: arrival.routeType,
              textColor: arrival.textColor,
              routeColor: arrival.routeColor,
            };
          });
        });
      });

      return allArrivalsData.sort(
        (a, b) => a.minutesToArrival - b.minutesToArrival
      );
    }
    return null;
  }, [arrivalData]);

  return (
    <ArrivalsContainer>
      {formattedArrivalsData &&
        formattedArrivalsData.map((arrival) => (
          <DisplayTile {...arrival} triggerMediaQuery={true} />
        ))}
    </ArrivalsContainer>
  );
};

export default ArrivalsPage;
