import React from "react";
import { StyledLabelPros, StyledLabelCons } from "./styled";

function CardLabel({ children, isNegative }) {
  if (isNegative) {
    return <StyledLabelCons>{children}</StyledLabelCons>;
  }
  return <StyledLabelPros>{children}</StyledLabelPros>;
}

export default CardLabel;
