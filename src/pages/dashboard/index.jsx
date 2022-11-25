import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";

import API from "../../services/api";

import { Box, Container, Errors } from "./styles";

import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import { Select } from "../../components/Form/styles";
import CardComp from "../../components/Card";

function Dashboard() {
  const [calcs, setCalcs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {}, [calcs, error]);

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

  const calcular = ({ amount, installments, mdr, daysString, errors }) => {
    let urlReq;

    switch (errors) {
      case "normal":
        urlReq = "/";
        break;
      case "timeout":
        urlReq = "?timeout";
        break;
      case "inter":
        urlReq = "?internalError";
        break;
      case "delay":
        urlReq = "?delay=5000";
        break;
      default:
        break;
    }

    setIsLoading(true);

    const days = daysString.split(",").map((date) => date.trim());
    let dados = {
      amount,
      installments,
      mdr,
    };

    if (!!Number(days[0])) {
      dados = { days, ...dados };
    }

    API.post(urlReq, dados)
      .then((res) => {
        setCalcs(res.data);
        setIsLoading(false);
        return;
      })
      .catch((err) => {
        setCalcs(null);
        if (err.response.request.status === 408) {
          setError(
            "A requisição demorou muito, o servidor pode estar fora do ar!"
          );
        }
        if (err.response.request.status === 500) {
          setError("Servidor fora do ar!");
        }
        setIsLoading(false);
        return err.response.request.status;
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
          <Select>
            <label htmlFor="normal">Normal</label>
            <input
              defaultChecked
              type="radio"
              id="normal"
              name="errors"
              value="normal"
              {...register("errors")}
            />
            <label htmlFor="timeout">Timeout</label>
            <input
              type="radio"
              id="timeout"
              name="errors"
              value="timeout"
              {...register("errors")}
            />
            <label htmlFor="delay">Delay</label>
            <input
              type="radio"
              id="delay"
              name="errors"
              value="delay"
              {...register("errors")}
            />
            <label htmlFor="inter">Internal Server Error</label>
            <input
              type="radio"
              id="inter"
              name="errors"
              value="inter"
              {...register("errors")}
            />
          </Select>
          <ButtonComp type="submit" nameButton="Calcular"></ButtonComp>
        </FormComp>
        {isLoading ? (
          <CardComp title="Calculando..." result={false} />
        ) : calcs ? (
          <CardComp title="VOCÊ RECEBERÁ:" result={calcs} />
        ) : (
          error && <CardComp title="OPS..." result={false} error={error} />
        )}
      </Box>
    </Container>
  );
}

export default Dashboard;
