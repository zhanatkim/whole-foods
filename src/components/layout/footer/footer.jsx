import React from "react";
import Logo from "../../ui/logo/logo";

import { StyledFooter } from "./styled";
function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <p className="copywrite">Создано 2021</p>
    </StyledFooter>
  );
}

export default Footer;
