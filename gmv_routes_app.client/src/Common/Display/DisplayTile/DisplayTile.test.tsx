import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import DisplayTile, { displayTileTestId, propsType } from "./DisplayTile";
import userEvent from "@testing-library/user-event";
import { IconInCircleTestId } from "../../Icons/IconInCircle";

describe("<DisplayTile />", () => {
  const mockDestinationText = "mock-destination-text";
  const mockMinutesToArrival = 5;
  const mockRouteName = "mock-route-name";
  const mockRouteType = "Bus";
  const mockTextColor = "blue";
  const mockRouteColor = "red";
  const mockHandleClick = vi.fn();

  const mockProps: propsType = {
    destinationText: mockDestinationText,
    minutesToArrival: mockMinutesToArrival,
    handleClick: mockHandleClick,
    routeName: mockRouteName,
    routeType: mockRouteType,
    textColor: mockTextColor,
    routeColor: mockRouteColor,
  };

  it("should render the destination text properly", () => {
    render(<DisplayTile {...mockProps} />);
    expect(screen.getByText(mockDestinationText)).toBeDefined();
  });

  it("should render the minutes to arrival properly", () => {
    render(<DisplayTile {...mockProps} />);
    expect(
      screen.getByText(`In ${mockMinutesToArrival} minutes`)
    ).toBeDefined();
  });

  it("should trigger the handleClick behavior when a user clicks on the component", async () => {
    render(<DisplayTile {...mockProps} />);
    const displayTile = screen.getByTestId(displayTileTestId);
    userEvent.click(displayTile);
    await waitFor(() => expect(mockHandleClick).toHaveBeenCalledTimes(1));
  });

  it("should render an icon", () => {
    render(<DisplayTile {...mockProps} />);
    expect(screen.getByTestId(IconInCircleTestId)).toBeDefined();
  });

  it("should display the route name", () => {
    render(<DisplayTile {...mockProps} />);
    expect(screen.getByText(mockRouteName)).toBeDefined();
  });

  it("should render the destination text when it is provided", () => {
    render(<DisplayTile {...mockProps} />);
    expect(screen.getByText(mockDestinationText)).toBeDefined();
  });
});
