import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { AboutWrapper, AboutInner, AboutText } from "./styled";

function About() {
  return (
    <AboutWrapper>
      <AboutInner>
        <Title
          size={TitleSize.BIG}
          children="Магазин фермерских продуктов с доставкой"
        />
        <AboutText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutText>
      </AboutInner>
    </AboutWrapper>
  );
}

export default About;
