import styled, { keyframes } from "styled-components";

const colorsAnimation = keyframes`
  0% {
    background-position: 0% 25%;
  }
  25% {
    background-position: 50% 25%;
  }
  50%{
    background-position: 75% 50%;
  }
  75% {
    background-position: 100% 75%;
  }
  100%{
    background-position: 0% 25%;
  }
`;

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, #faf7f0, #cdfcf6, #bccef8, #98a8f8);
  background-size: 200% 200%;
  animation-name: ${colorsAnimation};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;
