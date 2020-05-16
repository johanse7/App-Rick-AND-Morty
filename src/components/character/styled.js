import styled from "styled-components";

export const GridCharacter = styled.section`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  grid-row-gap: 1em;
  display: grid;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  height: 40px;
  border: 1px;
  background: #f7f7f7;
  padding: 0 1em;
  text-align: center;
`;
