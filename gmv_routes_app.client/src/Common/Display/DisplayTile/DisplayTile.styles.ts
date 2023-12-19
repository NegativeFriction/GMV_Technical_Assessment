import styled, { css } from "styled-components";

type DisplayTileWrapperProps = {
  triggerMediaQuery?: boolean;
};

export const DisplayTileContainer = styled.div<DisplayTileWrapperProps>`
  --trigger-media-query: ${(props) => (props.triggerMediaQuery ? "1" : "0")};
  background-color: #e5e5e5;
  margin-bottom: 32px;
  border-radius: 32px;
  width: 100%;
  ${({ triggerMediaQuery }) =>
    triggerMediaQuery &&
    css`
      @media (orientation: landscape) {
        width: calc(50% - 16px);
      }
    `}
`;

export const DisplayTileContentWrapper = styled.div`
  padding: 24px;
`;

export const DisplayTileTitleWrapper = styled.span`
  display: flex;
`;

export const DisplayTileRouteNameWrapper = styled.div`
  font-weight: 700;
  font-size: 64px;
  margin-left: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DisplayTileRouteTextWrapper = styled.div`
  color: #6e7581;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin: 24px;
`;

export const DisplayTileTimeWrapper = styled.div`
  text-align: right;
  color: #2c3242;
  font-size: 48px;
  font-weight: 700;
`;
