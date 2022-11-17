import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  padding: 1rem;

  h3 {
    color: #e6eaff;
    font-size: 2.2vh;
    margin-top: 3vh;
    margin-bottom: 4vh;
  }

  div {
    display: flex;
    width: 100%;
    flex-direction: column;

    div {
      display: flex;
      width: 100%;
      flex-direction: row;
    }

    p {
      color: #e6eaff;
      font-size: 2vh;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
  }

  @media (min-width: 1450px) {
    max-width: 40%;
  }

  @media (min-width: 1600px) {
    max-width: 30%;
  }
`;
