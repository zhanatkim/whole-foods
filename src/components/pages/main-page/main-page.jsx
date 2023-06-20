import React from "react";
import { StyledMainPage } from "./styled";
import About from "../../blocks/about/about";
import ProsCons from "../../blocks/pros-cons/pros-cons";
function MainPage({ ...props }) {
  return (
    <StyledMainPage>
      <About />
      <ProsCons {...props} />
    </StyledMainPage>
  );
}

export default MainPage;
