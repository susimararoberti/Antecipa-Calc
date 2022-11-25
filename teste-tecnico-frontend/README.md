<h1 align="center">Calculadora de Antecipação</h1>

## 💻 Projeto

Essa aplicação utiliza uma API externa que realiza cálculos de antecipação de valores. O cliente acessará a aplicação e precisará preencher um formulário indicando o valor total a receber, a quantidade de parcelas e a taxa `mdr` (de cobrança sobre transações em cartões de crédito e débito). Por padrão a aplicação retorna o cálculo do valor a receber nos seguintes períodos:

> 1 dia útil;<br>
> 15 dias;<br>
> 30 dias;<br>
> 90 dias;

Existe um campo opcional onde o cliente poderá simular o recebimento em qualquer outro período - sendo 1 ou mais períodos.

## 🔨 Tecnologias e Bibliotecas utilizadas

- React
- Styled-Components
- Axios

## ✨ Instalação

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

No diretório do projeto, você precisará executar:

- `npm install` ou `yarn` para instalar as dependências necessárias;

Em seguida

- `npm start` ou `yarn start` para rodar o projeto em seu ambiente local;

## Notas:

Essa aplicação também apresenta as seguintes opções de simulação de erro:

> Comportamento esperado devido ao 'Timeout' da aplicação;<br>
> Comportamneto esperado devido a um 'delay' na resposta da aplicação;<br>
> Comportamento esperado devido a um erro interno do servidor.
