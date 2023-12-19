import { describe, expect, it, vi } from "vitest";

import Header from "./Header";
import { rapidLogoComponentTestId } from "../../assets/RapidLogoComponent";
import { clockComponentTestId } from "../Display/ClockComponent/ClockComponent";
import { render, screen, waitFor } from "@testing-library/react";
import { SelectedRouteContext } from "../../Contexts/SelectedRouteContext";
import { genericButtonTestId } from "../Buttons/GenericButton";

describe("<Header />", () => {
  it("should render the logo", () => {
    render(<Header />);

    expect(screen.getByTestId(rapidLogoComponentTestId)).toBeTruthy();
  });

  it("should render the clock component", () => {
    render(<Header />);

    expect(screen.getByTestId(clockComponentTestId)).toBeTruthy();
  });

  it("should not render a button if the user has not selected a route", async () => {
    render(
      <SelectedRouteContext.Provider value={{ selectedRoute: undefined }}>
        <Header />
      </SelectedRouteContext.Provider>
    );

    await waitFor(() =>
      expect(screen.queryByTestId(genericButtonTestId)).toBeFalsy()
    );
  });

  it("should render a button if the user has selected a route", async () => {
    render(
      <SelectedRouteContext.Provider
        value={{ selectedRoute: "mock-selected-route" }}
      >
        <Header />
      </SelectedRouteContext.Provider>
    );

    await waitFor(() =>
      expect(screen.queryByTestId(genericButtonTestId)).toBeTruthy()
    );
  });
});
