import styled from "styled-components";

export const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;
