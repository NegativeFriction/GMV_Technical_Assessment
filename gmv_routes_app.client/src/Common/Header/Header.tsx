import React from "react";
import { useSelectedRouteContext } from "../../Contexts/SelectedRouteContext";
import RapidLogoComponent from "./../../assets/RapidLogoComponent";
import GenericButton, { buttonSVGValues } from "../Buttons/GenericButton";
import ClockComponent, {
  supportedTimeZones,
} from "../Display/ClockComponent/ClockComponent";
import { HeaderContainer, LogoAndTimeWrapper } from "./Header.styles";

export const headerTestId = "header-test-id";

const Header: React.FC = () => {
  const { selectedRoute, setSelectedRoute } = useSelectedRouteContext();
  return (
    <HeaderContainer data-testid={headerTestId}>
      <LogoAndTimeWrapper>
        <RapidLogoComponent />
        <ClockComponent timeZone={supportedTimeZones.EST} />
      </LogoAndTimeWrapper>
      {selectedRoute && (
        <GenericButton
          callBackFn={() => setSelectedRoute!(undefined)} // not necessary to pass undefined explicitly, but it self-documents the code better
          buttonText="Go Back"
          buttonIcon={buttonSVGValues.backArrow}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
