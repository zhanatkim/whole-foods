import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import { StyledPageWrapper } from "./styled";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <StyledPageWrapper>
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...prop} />
      </main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
