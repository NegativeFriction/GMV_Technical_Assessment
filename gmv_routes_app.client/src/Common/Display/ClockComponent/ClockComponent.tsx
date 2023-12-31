import React, { useState, useEffect } from "react";
import { ClockComponentWrapper } from "./ClockComponent.styles";

export const clockComponentTestId = "clock-component-test-id";

export enum supportedTimeZones {
  EST = "America/New_York",
}
type PropsType = {
  timeZone: supportedTimeZones;
};
const ClockComponent: React.FC<PropsType> = ({ timeZone }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const getTime = () => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      };
      const currentTime = currentDate.toLocaleString("en-US", options);
      setLocalTime(currentTime);
    };
    getTime();
    const interval = setInterval(getTime, 5000);
    // Set the interval to 5 seconds so that the displayed time is never more than 5 seconds off from the true time

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockComponentWrapper data-testid={clockComponentTestId}>
      {localTime}
    </ClockComponentWrapper>
  );
};

export default ClockComponent;
