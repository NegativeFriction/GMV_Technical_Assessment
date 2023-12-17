import React from "react";
import TrainComponent from "../../assets/TrainComponent";
import BusComponent from "../../assets/BusComponent";
import { RouteButtonContainer, RouteTextContainer } from "./RouteButton.styles";

interface propsType {
  iconName: string;
  routeName: string;
  textColor: string;
  routeColor: string;
  handleClick?: () => void;
}

const RouteButton: React.FC<propsType> = ({
  iconName,
  routeName,
  textColor,
  routeColor,
  handleClick,
}) => {
  const iconStyles = {
    margin: "12px 16.8px 14.4px 16.8px",
    width: "120px",
  };
  const caseCorrectedIconName =
    iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();
  let IconSource;

  switch (caseCorrectedIconName) {
    case "Train":
      IconSource = <TrainComponent fill={textColor} />;
      break;
    case "Bus":
      IconSource = <BusComponent fill={textColor} />;
      break;
    default:
      throw new Error("Unsupported method of transportation");
  }

  return (
    <RouteButtonContainer
      routeColor={routeColor}
      textColor={textColor}
      onClick={handleClick}
    >
      <div style={iconStyles}>{IconSource}</div>
      <RouteTextContainer>{routeName}</RouteTextContainer>
    </RouteButtonContainer>
  );
};

export default RouteButton;
