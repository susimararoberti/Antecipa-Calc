import { useHistory } from "react-router-dom";

import { StyledBox } from "./styles";

function BoxHome() {
  const dashboard = useHistory();

  const levarACalculadora = () => {
    dashboard.push("/dashboard");
  };

  return (
    <StyledBox>
      <h1>Precisando antecipar suas transações?</h1>
      <div>
        <p>Descubra </p>
        <span onClick={levarACalculadora}>AQUI!</span>
      </div>
    </StyledBox>
  );
}

export default BoxHome;
