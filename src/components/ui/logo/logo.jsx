import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { StyledLogo } from "./styled";
function Logo() {
  return (
    <StyledLogo>
      <ReactComponent />
    </StyledLogo>
  );
}

export default Logo;
