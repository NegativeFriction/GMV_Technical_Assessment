import { afterAll, describe, expect, it, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";

import HomePage, { Route } from "./HomePage";

vi.mock("../../Common/Display/DisplayTile/DisplayTile", () => ({
  __esModule: true,
  default: (props: Route) => (
    <div data-testid="display-tile">{props.routeName}</div>
  ),
}));

describe("<HomePage />", () => {
  const mockedRoutes: Route[] = [
    {
      routeName: "aaa",
      routeColor: "mock-route-color-1",
      textColor: "mock-route-text-color-1",
      routeType: "Bus",
    },
    {
      routeName: "CcC",
      routeColor: "mock-route-color-2",
      textColor: "mock-route-text-color-2",
      routeType: "Bus",
    },
    {
      routeName: "bBb",
      routeColor: "mock-route-color-3",
      textColor: "mock-route-text-color-3",
      routeType: "Bus",
    },
    {
      routeName: "123",
      routeColor: "mock-route-color-4",
      textColor: "mock-route-text-color-4",
      routeType: "Bus",
    },
  ];
  // @ts-ignore: fetch should return a lot of properties that we don't care about
  globalThis.fetch = async () => ({
    json: async () => mockedRoutes,
  });

  afterAll(() => {
    vi.clearAllMocks();
  });
  it.each(mockedRoutes)(
    `Should display the routeName from all of the data`,
    async ({ routeName }) => {
      render(<HomePage />);
      await waitFor(() => expect(screen.getByText(routeName)).toBeDefined());
    }
  );

  it("should render the routes in alphabetical order by their routeName", async () => {
    render(<HomePage />);
    const renderedRouteNames = await screen.findAllByTestId("display-tile");
    const actualRouteNames = renderedRouteNames.map((element) =>
      element.textContent?.toLowerCase()
    );

    const expectedRouteNames = mockedRoutes
      .map((route) => route.routeName.toLowerCase())
      .sort();

    await waitFor(() => expect(actualRouteNames).toEqual(expectedRouteNames));
  });
});
