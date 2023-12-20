import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Header from "./Header";
import { rapidLogoComponentTestId } from "../../assets/RapidLogoComponent";
import { clockComponentTestId } from "../Display/ClockComponent/ClockComponent";
import { SelectedRouteContext } from "../../Contexts/SelectedRouteContext";
import { genericButtonTestId } from "../Buttons/Generic_Button/GenericButton";

describe("<Header />", () => {
  it("should render the logo", () => {
    render(<Header />);

    expect(screen.getByTestId(rapidLogoComponentTestId)).toBeDefined();
  });

  it("should render the clock component", () => {
    render(<Header />);

    expect(screen.getByTestId(clockComponentTestId)).toBeDefined();
  });

  it("should not render a button if the user has not selected a route", async () => {
    render(
      <SelectedRouteContext.Provider value={{ selectedRoute: undefined }}>
        <Header />
      </SelectedRouteContext.Provider>
    );

    await waitFor(() =>
      expect(screen.queryByTestId(genericButtonTestId)).toBeNull()
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
      expect(screen.queryByTestId(genericButtonTestId)).toBeDefined()
    );
  });
});
