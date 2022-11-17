import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import { Box, Container } from "./styles";

function DashboardCalculo() {
  return (
    <Container>
      <Box>
        <FormComp title="Simule sua antecipação:" inputSize="7vh">
          <ButtonComp type="submit" nameButton="Calcular"></ButtonComp>
        </FormComp>
      </Box>
    </Container>
  );
}

export default DashboardCalculo;
