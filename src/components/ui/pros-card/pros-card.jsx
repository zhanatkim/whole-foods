import React from "react";
import CardLabel from "../card-label/card-label";
import Title, { TitleSize } from "../../ui/title/title";
import { ProsconsCard, ProsconsInner, ProsconsText, SvgIcon } from "./styled";

export const cardType = {
  PROS: "pros",
  CONS: "cons"
};

function ProsCard({ title, text, icon, isNegative }) {
  if (isNegative) {
    return (
      <ProsconsCard>
        <div className="cons">
          <ProsconsInner>
            <CardLabel isNegative children="Магазинные продукты" />
            <Title size={TitleSize.SMALL} children={title} />
          </ProsconsInner>
          <SvgIcon children={icon} />
          <ProsconsText children={text} />
        </div>
      </ProsconsCard>
    );
  }
  return (
    <ProsconsCard>
      <div className="pros">
        <ProsconsInner>
          <CardLabel children="Фермерские продукты" />
          <Title size={TitleSize.SMALL} children={title} />
        </ProsconsInner>
        <SvgIcon children={icon} />
        <ProsconsText children={text} />
      </div>
    </ProsconsCard>
  );
  // let figure = "";
  // switch (type) {
  //   case cardType.PROS:
  //     figure = (
  //       <CardLabel type={labelType.PROS} children="Фермерские продукты" />
  //     );
  //     break;
  //   case cardType.CONS:
  //     figure = (
  //       <CardLabel type={labelType.CONS} children="Магазинные продукты" />
  //     );
  //     break;
  //   default:
  //     figure = <CardLabel />;
  // }
  // return (
  //   <div className={`proscons-card${type ? ` proscons-card_${type}` : ""}`}>
  //     <div className="proscons-card__inner">
  //       {figure}
  //       <Title size={TitleSize.SMALL} children={title} />
  //     </div>
  //     {icon}
  //     <p className="proscons-card__text">{text}</p>
  //   </div>
  // );
}

export default ProsCard;
