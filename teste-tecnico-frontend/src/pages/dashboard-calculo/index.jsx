import API from "../../services/api";
import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import { Box, Container, Errors } from "./styles";
import CardComp from "../../components/Card";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

function DashboardCalculo() {
  const [calculos, setCalculos] = useState(null);

  useEffect(() => {}, [calculos]);

  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Apenas números")
      .required()
      .positive("Apenas números positivos")
      .integer("Apenas números inteiros"),
    installments: yup
      .number()
      .min(1)
      .max(12, "Somente até 12 parcelas")
      .default(1)
      .typeError("Apenas números")
      .required()
      .positive("Apenas números positivos")
      .integer("Apenas números inteiros"),
    mdr: yup
      .number()
      .typeError("Apenas números")
      .required()
      .positive("Apenas números positivos"),
    daysString: yup
      .string()
      .matches(/^[\d,.?!]+$/, {
        excludeEmptyString: true,
        message: "digite números separados por vírgula e sem espaço",
      })
      .typeError("separe por vírgula"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const calcular = ({ amount, installments, mdr, daysString }) => {
    const days = daysString.split(",").map((date) => date.trim());
    let dados = {
      amount,
      installments,
      mdr,
    };

    if (!!Number(days[0])) {
      dados = { days, ...dados };
    }

    API.post("/", dados)
      .then((res) => {
        setCalculos(res.data);

        return;
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  return (
    <Container>
      <Box>
        <FormComp
          title="Simule sua antecipação:"
          onSubmitFunction={handleSubmit(calcular)}
          inputSize="7vh"
        >
          <div>
            <label>
              Informe o valor da venda *{" "}
              {errors.amount?.message && (
                <Errors> - {errors.amount?.message}</Errors>
              )}
            </label>
            <input placeholder="Digite o valor aqui" {...register("amount")} />
          </div>
          <div>
            <label>
              Em quantas parcelas *{" "}
              {errors.installments?.message && (
                <Errors> - {errors.installments?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite aqui o número de parcelas"
              {...register("installments")}
            />
          </div>
          <div>
            <label>
              Informe o percentual de MDR *{" "}
              {errors.mdr?.message && <Errors> - {errors.mdr?.message}</Errors>}
            </label>
            <input
              placeholder="Digite aqui o percentual"
              {...register("mdr")}
            />
          </div>
          <div>
            <label>
              Informe as datas para seu recebimento, separado por vírgulas
              (opcional) *{" "}
              {errors.daysString?.message && (
                <Errors> - {errors.daysString?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite aqui as datas separadas por vírgulas"
              {...register("daysString")}
            />
          </div>
          <ButtonComp type="submit" nameButton="Calcular"></ButtonComp>
        </FormComp>
        {calculos && <CardComp title="VOCÊ RECEBERÁ:" resultado={calculos} />}
      </Box>
    </Container>
  );
}

export default DashboardCalculo;
