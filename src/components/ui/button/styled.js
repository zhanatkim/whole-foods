import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  text-decoration: none;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #ffffff;
  background-color: #fc9b27;
  min-width: ${(props) => props.theme.buttonWIdth};
  margin: 0;
  padding: 17px 97px;
  box-sizing: border-box;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${(props) => props.theme.buttonActiveColor};
    box-shadow: none;
  }
`;
