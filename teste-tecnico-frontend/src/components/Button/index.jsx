import { Button } from "./styles";

function ButtonComp({ onclick, type, nameButton }) {
  return (
    <Button onclick={onclick} type={type}>
      {nameButton}
    </Button>
  );
}

export default ButtonComp;
