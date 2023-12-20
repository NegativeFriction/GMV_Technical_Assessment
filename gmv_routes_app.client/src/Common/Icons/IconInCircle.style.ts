import styled from "styled-components";

export type IconWrapperPropsType = {
  background_color: string;
  size: number;
};
export const IconWrapper = styled.div<IconWrapperPropsType>`
  background-color: ${(props) => props.background_color};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
