import styled from "styled-components";
import Title from "../../ui/title/title";
export const ProsconsCard = styled.div`
  position: relative;
  display: grid;
  justify-items: start;
  align-items: center;

  .cons {
    background-color: #f8ddd7;
    min-height: 197px;
    padding: 20px;
  }

  .pros {
    background-color: #e1edce;
    min-height: 197px;
    padding: 20px;
  }
`;

export const ProsconsInner = styled.div`
  padding-left: 96px;
`;

export const SvgIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 20px;
  background: no-repeat url(${(props) => props.icon});
`;

export const ProsconsText = styled.p`
  margin-bottom: 0;
`;

export const ProsconsTitle = styled(Title)`
  padding-top: 10px;
`;
