import styled, { createGlobalStyle } from "styled-components";
import NCAAFont from "./../fonts/NCAAFightingIllini.woff2";

export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: "NCAAIllinoisFightingIllini, NCAA Illinois Fighting Illini";
    src: url(${NCAAFont}) format("woff2");
  }
`;

export const LogoWrapper = styled.div`
  font-family: "NCAAIllinoisFightingIllini, NCAA Illinois Fighting Illini",
    sans-serif;
`;
