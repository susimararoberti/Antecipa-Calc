import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 80%;
  padding: 1vh;
  margin-top: 5vh;
  box-shadow: 0px 0px 12px 5px #00000033;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #2a49fa, #001dc0, #00106b);

  @media (min-width: 700px) {
    flex-direction: row;
    width: 70%;
    margin-top: 10vh;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    width: 60%;
  }
`;

export const Errors = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #ffffff;
`;
