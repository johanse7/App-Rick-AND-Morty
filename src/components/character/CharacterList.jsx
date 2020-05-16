import React, { forwardRef } from "react";
import Card from "../Card";
import { GridCharacter } from "./styled";

const CharacterList = forwardRef(({ characters }, ref) => {
  return (
    <GridCharacter>
      {characters &&
        characters.map((character, index) => {
          if (characters.length === index + 1) {
            return <Card ref={ref} key={character.id} {...character} />;
          }
          return <Card key={character.id} {...character} />;
        })}
    </GridCharacter>
  );
});

export default CharacterList;
