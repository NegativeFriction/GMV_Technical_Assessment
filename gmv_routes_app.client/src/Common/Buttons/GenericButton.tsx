import React from "react";
import BackArrow from "./../../assets/Back Arrow.svg";
import {
  GenericButtonWrapper,
  GenericButtonTextWrapper,
} from "./GenericButton.styles";

export const genericButtonTestId = "generic-button-test-id";

export enum buttonSVGValues {
  "backArrow",
}

export type PropsType = {
  callBackFn: (args?: any) => void;
  buttonText: string;
  buttonIcon?: buttonSVGValues;
};

const GenericButton: React.FC<PropsType> = ({
  callBackFn,
  buttonText,
  buttonIcon,
}) => {
  const getIconSrc = (svgArg?: buttonSVGValues) => {
    switch (svgArg) {
      case buttonSVGValues.backArrow:
        return BackArrow;
      default:
        return null;
    }
  };

  const getAltText = (svgArg?: buttonSVGValues) => {
    switch (svgArg) {
      case buttonSVGValues.backArrow:
        return "A back arrow";
      default:
        return;
    }
  };

  const iconSrc = getIconSrc(buttonIcon);
  const altText = getAltText(buttonIcon);
  return (
    <GenericButtonWrapper
      onClick={callBackFn}
      data-testid={genericButtonTestId}
    >
      {iconSrc && (
        <img src={iconSrc!} alt={altText} width="50px" height="50px" />
      )}

      <GenericButtonTextWrapper>{buttonText}</GenericButtonTextWrapper>
    </GenericButtonWrapper>
  );
};

export default GenericButton;
