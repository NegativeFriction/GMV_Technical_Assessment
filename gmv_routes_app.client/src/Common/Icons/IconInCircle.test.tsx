import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import IconInCircle, { IconInCircleTestId, propsType } from "./IconInCircle";
import { busComponentTestId } from "../../assets/BusComponent";
import { trainComponentTestId } from "../../assets/TrainComponent";
import { pathTestId } from "../../assets/testIds";

describe("<IconInCircle />", () => {
  const mockFillColor = "rgba(0,0,0,0)";
  const mockBackgroundColor = "rgb(255, 0, 0)";
  const mockProps: propsType = {
    iconName: "Bus",
    size: undefined,
    backgroundColor: mockBackgroundColor,
    fillColor: mockFillColor,
  };
  it('Should render a bus image when the iconName is "Bus"', async () => {
    render(<IconInCircle {...mockProps} />);
    await waitFor(() =>
      expect(screen.getByTestId(busComponentTestId)).toBeDefined()
    );
  });

  it('Should render a train image when the iconName is "Train"', async () => {
    render(<IconInCircle {...{ ...mockProps, iconName: "Train" }} />);
    await waitFor(() =>
      expect(screen.getByTestId(trainComponentTestId)).toBeDefined()
    );
  });

  it("The icon should have the same fill color as fillColor", async () => {
    render(<IconInCircle {...mockProps} />);
    await waitFor(() => {
      const icon = screen.getByTestId(pathTestId);
      const fill = icon.getAttribute("fill");
      expect(fill).toEqual(mockFillColor);
    });
  });

  it("The icon should have the same backgroundColor as the prop backgroundColor", async () => {
    render(<IconInCircle {...mockProps} />);
    const wrapper = document.querySelectorAll(
      `[data-testid="${IconInCircleTestId}"]`
    );
    const style = window.getComputedStyle(wrapper[0]);
    expect(style.backgroundColor).toEqual(mockBackgroundColor);
  });
});
