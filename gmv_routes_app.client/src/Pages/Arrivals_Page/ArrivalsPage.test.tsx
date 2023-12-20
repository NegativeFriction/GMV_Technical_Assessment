import { afterAll, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { propsType as displayTileProps } from "../../Common/Display/DisplayTile/DisplayTile";
import ArrivalsPage, { Arrival } from "./ArrivalsPage";
import { SelectedRouteContext } from "../../Contexts/SelectedRouteContext";

vi.mock("../../Common/Display/DisplayTile/DisplayTile", () => ({
  __esModule: true,
  default: (props: displayTileProps) => (
    <>
      <div data-testid="route-name">{props.routeName}</div>
      <div data-testid="minutes-to-arrival">{props.minutesToArrival}</div>
    </>
  ),
}));

describe("<ArrivalsPage />", () => {
  const mockedArrivals: Arrival[] = [
    {
      routeName: "aaa",
      routeColor: "mock-route-color-1",
      textColor: "mock-route-text-color-1",
      routeType: "Bus",
      destinationsData: [
        {
          destinationText: "Mock Destination Text",
          minutesToArrival: [10, 20, 30, 100],
        },
      ],
    },
    {
      routeName: "123",
      destinationsData: [
        {
          destinationText: "Mock Destination Text",
          minutesToArrival: [1, 6, 12, 15, 60],
        },
      ],
      routeColor: "mock-route-color-4",
      textColor: "mock-route-text-color-4",
      routeType: "Bus",
    },
  ];
  // @ts-ignore: fetch should return a lot of properties that we don't care about
  globalThis.fetch = async () => ({
    json: async () => mockedArrivals,
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  it("should render the arrivals in order based on how many minutes until arrival", async () => {
    render(
      <SelectedRouteContext.Provider
        value={{ selectedRoute: "mock-route-name", setSelectedRoute: vi.fn() }}
      >
        <ArrivalsPage />
      </SelectedRouteContext.Provider>
    );

    const renderedArrivalTimes = await screen.findAllByTestId(
      "minutes-to-arrival"
    );
    const actualArrivalTimes = renderedArrivalTimes.map((element) =>
      element.textContent?.toLowerCase()
    );

    const sortedArrivalTimes = actualArrivalTimes.sort();

    await waitFor(() => expect(sortedArrivalTimes).toEqual(actualArrivalTimes));
  });
});
