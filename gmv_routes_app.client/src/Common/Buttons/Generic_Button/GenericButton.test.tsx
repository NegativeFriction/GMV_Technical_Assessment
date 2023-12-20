import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GenericButton, {
  propsType,
  buttonSVGValues,
  genericButtonTestId,
} from "./GenericButton";

describe("<GenericButton />", () => {
  const mockCallBackFn = vi.fn();
  const mockButtonText = "mock-button-text";

  const mockProps: propsType = {
    callBackFn: mockCallBackFn,
    buttonText: mockButtonText,
    buttonIcon: buttonSVGValues.backArrow,
  };
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Should call the callBack function when the user clicks the button", async () => {
    render(<GenericButton {...mockProps} />);

    const button = screen.getByTestId(genericButtonTestId);
    userEvent.click(button);
    await waitFor(() =>
      expect(screen.queryByText(mockButtonText)).toBeDefined()
    );
  });

  it("Should render an icon if the iconName prop has a valid value", async () => {
    render(<GenericButton {...mockProps} />);

    await waitFor(() => expect(screen.queryByRole("img")).toBeDefined());
  });

  it("Should render without an icon if one is not provided", () => {
    render(<GenericButton {...{ ...mockProps, buttonIcon: undefined }} />);
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("Should not render an icon if the iconName value is not a supported type", () => {
    render(
      // @ts-ignore We are intentionally violating the type of the buttonIcon argument
      <GenericButton
        {...{ ...mockProps, buttonIcon: "mock-undefined-value" }}
      />
    );

    expect(screen.queryByRole("img")).toBeNull();
  });
});
