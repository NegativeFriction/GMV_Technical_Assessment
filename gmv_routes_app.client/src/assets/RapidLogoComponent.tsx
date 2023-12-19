import React from "react";
import { LogoWrapper, FontStyle } from "./RapidLogoComponent.styles";

// Notes for reviewers-- the SVG had a few issues that weren't playing
// nicely with my local fonts. As such, I had to append a class name onto this specific componet
// and instruct all of the text elements to inherit the font rather than using inline editing
// I'm not a fan of going into it and mucking about, but that was the only solution I could find to make it
// work in this environment in a timely manner.

export const rapidLogoComponentTestId = "rapid-logo-component-test-id";

const RapidLogoComponent: React.FC = () => {
  return (
    <>
      <FontStyle />
      <LogoWrapper data-testid={rapidLogoComponentTestId}>
        <svg
          width="506px"
          height="110px"
          viewBox="0 0 506 110"
          xmlns="http://www.w3.org/2000/svg"
          // className="svg-component"
        >
          <title>Rapid Logo</title>
          <defs>
            <linearGradient
              x1="100%"
              y1="50%"
              x2="0%"
              y2="50%"
              id="linearGradient-1"
            >
              <stop stopColor="#00EA7C" offset="0%"></stop>
              <stop stopColor="#1877A3" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Rapid-Logo"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <polygon
              id="Rectangle"
              fill="url(#linearGradient-1)"
              points="38.9230769 -1.90819582e-15 506 0 468.026266 110 0 110"
            ></polygon>
            <text
              id="Rapid"
              fontFamily="inherit"
              fontSize="82"
              fontWeight="normal"
              fill="#FFFFFF"
            >
              <tspan x="41" y="81">
                Rapid
              </tspan>
            </text>
            <text
              id="BUS-and-TRAIN"
              fontFamily="inherit"
              fontSize="10"
              fontWeight="normal"
              fill="#FFFFFF"
            >
              <tspan x="312" y="28">
                {" "}
              </tspan>
              <tspan x="324.402344" y="47" fontSize="32">
                BUS and
              </tspan>
              <tspan x="312" y="81" fontSize="32">
                TRAIN
              </tspan>
            </text>
          </g>
        </svg>
      </LogoWrapper>
    </>
  );
};

export default RapidLogoComponent;

// Was modifying the SVG part of the test? The y coordinates for "Bus and Train" were significantly off and I had to update them locally.
