import styled from "styled-components";

export const StyledLogo = styled.a`
  margin-left: -4px;
  height: 44px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    opacity: 50%;
  }
  &:active,
  &:visited {
    opacity: 90%;
  }
`;
