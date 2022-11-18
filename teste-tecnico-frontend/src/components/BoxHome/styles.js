import styled from "styled-components";

export const StyledBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  h1 {
    font-size: 3vh;
    font-weight: 700;
    background-color: #0bf17e;
    background-image: linear-gradient(45deg, #0bf17e, #0214b6);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-bottom: 2vh;
  }

  div {
    display: flex;
    gap: 3px;

    p {
      font-size: 2vh;
      font-weight: 500;
      color: #3d0f57;
    }

    span {
      font-size: 2vh;
      font-weight: 600;
      font-style: italic;
      color: #78078f;
      cursor: pointer;
    }
  }
`;
