import { Card } from "./styles";

function CardComp({ title, resultado }) {
  const values = Object.values(resultado);
  const keys = Object.keys(resultado);

  return (
    <Card>
      <h3>{title}</h3>

      <div>
        {keys?.map((key) => {
          return (
            <div key={key}>
              <p>
                Em {key} dias:{" "}
                {values[keys.indexOf(key)].toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default CardComp;
