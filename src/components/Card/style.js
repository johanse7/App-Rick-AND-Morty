import styled, { keyframes } from "styled-components";

const fade = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }`;

export const Container = styled.article`
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.08),
    1px 3px 8px rgba(39, 44, 49, 0.1);
  border-radius: 5px;
  margin: 0 0 20px 0;
  display: block;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: ${fade};

  & img {
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
  }
  & h2 {
    font-size: 18px;
    font-weight: 300;
    padding: 5px 1px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
`;
