import React, { forwardRef } from "react";
import { Container } from "./style";

const Card = forwardRef(({ id, name, image, species }, ref) => {
  return (
    <Container ref={ref}>
      <img src={image} alt={name} />
      <h2>
        {name}
        <span>{species}</span>
        <span>{id}</span>
      </h2>
    </Container>
  );
});

export default Card;
