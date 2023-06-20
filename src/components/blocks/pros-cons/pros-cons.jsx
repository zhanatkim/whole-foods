import React from "react";
import { StyledItem, StyledList, StyledInner, StyledProscons } from "./styled";

import Title from "../../ui/title/title";
import ProsCard from "../../ui/pros-card/pros-card";
import Button from "../../ui/button/button";

function ProsCons({ pros, cons }) {
  return (
    <StyledProscons>
      <Title children="Почему фермерские продукты лучше?" />
      <StyledInner>
        {pros?.length ? (
          <StyledList>
            {pros.map((pro) => (
              <StyledItem key={pro.id}>
                <ProsCard {...pro} />
              </StyledItem>
            ))}
          </StyledList>
        ) : null}

        {cons?.length ? (
          <StyledList>
            {cons.map((con) => (
              <StyledItem key={con.id}>
                <ProsCard {...con} />
              </StyledItem>
            ))}
          </StyledList>
        ) : null}
      </StyledInner>
      <Button minWidth={260} children="Купить"></Button>
    </StyledProscons>
  );
}

export default ProsCons;
