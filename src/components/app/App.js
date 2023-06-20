import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styled";

import { FarmCards, ShopCards } from "../../mocks/cards";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper pros={FarmCards} cons={ShopCards} />
    </>
  );
}
