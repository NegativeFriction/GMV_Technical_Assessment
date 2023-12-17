import styled from "styled-components";

interface RouteButtonContainerProps {
  routeColor: string;
  textColor: string;
}
export const RouteButtonContainer = styled.span<RouteButtonContainerProps>`
  background-color: ${(props) => props.routeColor};
  color: ${(props) => props.textColor};
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 1000px;
  width: 1000px;
  height: 169 px;
  margin: 44px;
  margin-left: 19.68px;
  border-radius: 32px;
  font-size: 72px;
  font-weight: bold;
  cursor: pointer;
`;

export const RouteTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
`;
