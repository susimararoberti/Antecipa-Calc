import { Card } from "./styles";

function CardComp({ title, result, error }) {
  const values = Object.values(result);
  const keys = Object.keys(result);

  return (
    <Card>
      <h3>{title}</h3>

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {result && (
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
      )}
    </Card>
  );
}

export default CardComp;
