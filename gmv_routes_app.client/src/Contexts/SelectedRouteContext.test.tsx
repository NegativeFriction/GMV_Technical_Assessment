import { describe, expect, it } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import SelectedRouteContextProvider, {
  useSelectedRouteContext,
} from "./SelectedRouteContext";
import userEvent from "@testing-library/user-event";

describe("SelectedRouteContext", () => {
  const ContextTestComponent: React.FC = () => {
    const { selectedRoute, setSelectedRoute } = useSelectedRouteContext();
    console.log("selectedRoute", selectedRoute);

    return (
      <div>
        <div data-testid="selected-route">{selectedRoute}</div>
        <button onClick={() => setSelectedRoute("mock-selected-route-value")}>
          Set selected route
        </button>
      </div>
    );
  };

  it("Should render initial values", () => {
    render(
      <SelectedRouteContextProvider>
        <ContextTestComponent />
      </SelectedRouteContextProvider>
    );

    expect(screen.getByTestId("selected-route").innerText).toBeUndefined();
  });

  it("Should update selected route properly", async () => {
    render(
      <SelectedRouteContextProvider>
        <ContextTestComponent />
      </SelectedRouteContextProvider>
    );

    await act(async () => userEvent.click(screen.getByRole("button")));

    await waitFor(() =>
      expect(screen.getByText("mock-selected-route-value")).toBeDefined()
    );
  });
});
