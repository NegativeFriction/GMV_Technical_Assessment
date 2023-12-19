import styled from "styled-components";

export type IconWrapperPropsType = {
  backgroundColor: string;
  size: number;
};
export const IconWrapper = styled.div<IconWrapperPropsType>`
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
