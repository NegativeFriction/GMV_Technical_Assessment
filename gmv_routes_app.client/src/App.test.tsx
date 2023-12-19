import { describe, expect, it, vi } from "vitest";

import App from "./App";
import { headerTestId } from "./Common/Header/Header";

import { render, screen, waitFor } from "@testing-library/react";
import { SelectedRouteContext } from "./Contexts/SelectedRouteContext";

const mockedHomePageTestId = "home-page";
const mockedArrivalsPageTestId = "arrivals-page";
vi.mock("./Pages/Home_page/HomePage", () => ({
  __esModule: true,
  default: () => <div data-testid={mockedHomePageTestId}>Mocked HomePage</div>,
}));

vi.mock("./Pages/Arrivals_Page/ArrivalsPage", () => ({
  __esModule: true,
  default: () => (
    <div data-testid={mockedArrivalsPageTestId}>Mocked ArrivalsPage</div>
  ),
}));

describe("<App />", () => {
  it("The App function returns the Home Page component and not the Arrivals Page component when the user has not selected a route", () => {
    render(
      <SelectedRouteContext.Provider value={{ selectedRoute: undefined }}>
        <App />
      </SelectedRouteContext.Provider>
    );

    expect(screen.getByTestId(mockedHomePageTestId)).toBeTruthy();
    expect(screen.queryByTestId(mockedArrivalsPageTestId)).toBeFalsy();
  });

  it("Should navigate to the arrivals page when the user has selected a route", async () => {
    render(
      <SelectedRouteContext.Provider
        value={{ selectedRoute: "Mock-selected-route" }}
      >
        <App />
      </SelectedRouteContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId(mockedArrivalsPageTestId)).toBeTruthy()
    );
    await waitFor(() =>
      expect(screen.queryByTestId(mockedHomePageTestId)).toBeFalsy()
    );
  });

  it("Should render the Header component", () => {
    render(<App />);
    expect(screen.getByTestId(headerTestId)).toBeTruthy();
  });
});
