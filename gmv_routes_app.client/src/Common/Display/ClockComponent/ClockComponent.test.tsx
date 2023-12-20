import { afterEach, describe, expect, it, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";

import ClockComponent, { supportedTimeZones } from "./ClockComponent";

describe("<ClockComponent />", () => {
  const mockDate = new Date(1969, 7, 16, 5, 0, 0);
  const mockDateOptions: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should render the time in EST", async () => {
    vi.setSystemTime(mockDate);

    render(<ClockComponent timeZone={supportedTimeZones.EST} />);

    const expectedTime = mockDate.toLocaleString("en-us", mockDateOptions);
    await waitFor(() => expect(screen.findByText(expectedTime)).toBeDefined());
  });

  it("Should update the displayed time after a minute", async () => {
    const mockDateInOneMinute = new Date(1969, 7, 16, 5, 1, 0);
    vi.useFakeTimers({ shouldAdvanceTime: true }).setSystemTime(mockDate);

    render(<ClockComponent timeZone={supportedTimeZones.EST} />);
    const mockDateOptions: Intl.DateTimeFormatOptions = {
      timeZone: "America/New_York",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };
    const expectedTime = mockDateInOneMinute.toLocaleString(
      "en-us",
      mockDateOptions
    );

    await act(async () => {
      vi.advanceTimersByTime(60000);
    });

    await waitFor(() =>
      expect(screen.getByText(expectedTime, { exact: false })).toBeDefined()
    );
  });
});
