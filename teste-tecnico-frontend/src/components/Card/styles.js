import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 40px);
  max-width: 300px;
  padding: 1rem;

  h3 {
    color: #e6eaff;
    font-size: 2.5vh;
    margin-top: 3vh;
    margin-bottom: 4vh;
  }

  div {
    display: flex;
    width: 90%;
    flex-direction: column;

    div {
      display: flex;
      width: 90%;
      flex-direction: row;
    }

    p {
      color: #e6eaff;
      font-size: 2vh;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }

    span {
      color: #e6eaff;
      font-size: 2vh;
      font-weight: 500;
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
  }
`;
