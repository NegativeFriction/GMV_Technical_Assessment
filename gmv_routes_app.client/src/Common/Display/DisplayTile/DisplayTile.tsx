import React from "react";
import IconInCircle from "../../Icons/IconInCircle";
import {
  DisplayTileContainer,
  DisplayTileContentWrapper,
  DisplayTileTitleWrapper,
  DisplayTileRouteNameWrapper,
  DisplayTileRouteTextWrapper,
  DisplayTileTimeWrapper,
} from "./DisplayTile.styles";

export const displayTileTestId = "display-tile-test-id";

export interface propsType {
  destinationText?: string;
  minutesToArrival?: number;
  handleClick?: (args: any) => void;
  routeName: string;
  routeType: string;
  textColor: string;
  routeColor: string;
  triggerMediaQuery?: boolean;
}

const DisplayTile: React.FC<propsType> = ({
  destinationText,
  minutesToArrival,
  handleClick,
  routeName,
  routeType,
  textColor,
  routeColor,
  triggerMediaQuery = false,
}) => {
  return (
    <DisplayTileContainer
      onClick={handleClick}
      triggerMediaQuery={triggerMediaQuery}
      data-testid={displayTileTestId}
    >
      <DisplayTileContentWrapper>
        <DisplayTileTitleWrapper>
          <IconInCircle
            iconName={routeType}
            backgroundColor={routeColor}
            fillColor={textColor}
          />
          <DisplayTileRouteNameWrapper>{routeName}</DisplayTileRouteNameWrapper>
        </DisplayTileTitleWrapper>
        {destinationText && (
          <DisplayTileRouteTextWrapper>
            {destinationText}
          </DisplayTileRouteTextWrapper>
        )}
        {minutesToArrival && (
          <DisplayTileTimeWrapper>
            In {minutesToArrival} minutes
          </DisplayTileTimeWrapper>
        )}
      </DisplayTileContentWrapper>
    </DisplayTileContainer>
  );
};

export default DisplayTile;
