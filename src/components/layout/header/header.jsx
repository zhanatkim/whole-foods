import React from "react";
import { StyledHeader } from "./styled";

import Logo from "/src/components/ui/logo/logo";
import Nav from "../nav/nav";
function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
