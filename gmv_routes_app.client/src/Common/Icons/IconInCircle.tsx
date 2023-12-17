import React from "react";
import TrainComponent from "../../assets/TrainComponent";
import BusComponent from "../../assets/BusComponent";

interface propsType {
  iconName: string;
  size?: number;
  backgroundColor: string;
  fillColor: string;
}

const IconInCircle: React.FC<propsType> = ({
  iconName,
  size = 75,
  backgroundColor,
  fillColor,
}) => {
  const caseCorrectedIconName =
    iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();
  let iconSource;

  switch (caseCorrectedIconName) {
    case "Train":
      iconSource = <TrainComponent fill={fillColor} />;
      break;
    case "Bus":
      iconSource = <BusComponent fill={fillColor} />;
      break;
    default:
      throw new Error("Unsupported method of transportation.");
  }

  return (
    <div
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {iconSource}
    </div>
  );
};

export default IconInCircle;
