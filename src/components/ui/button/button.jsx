import React from "react";
import { StyledButton } from "./styled";

function Button({
  children, // дочерний элемент, отображаемый в кнопке
  link // ссылка
}) {
  return link ? (
    <StyledButton href={link}>{children}</StyledButton>
  ) : (
    <StyledButton as="button" type="button">
      {children}
    </StyledButton>
  );
}

export default Button;
