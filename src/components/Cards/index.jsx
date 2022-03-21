import Perguntas from "../Perguntas";
import { Main, BoxLogo, Logo, Titulo, Baixo } from "./style.js";

export default function Cards() {
  const PerguntasARR = [
    {
      numero: "Pergunta 1",
      texto: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      numero: "Pergunta 2",
      texto: "O React é __",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      numero: "Pergunta 3",
      texto: "Componentes devem iniciar com __ ",
      resposta: "letra maiúscula",
    },
    {
      numero: "Pergunta 4",
      texto: "Podemos colocar __ dentro do JSX",
      resposta: "expressões",
    },
    {
      numero: "Pergunta 5",
      texto: "O ReactDOM nos ajuda __ ",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      numero: "Pergunta 6",
      texto: "Usamos o npm para __",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      numero: "Pergunta 7",
      texto: "Usamos props para __",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      numero: "Pergunta 8",
      texto: "Usamos estado (state) para __",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  return (
    <Main>
      <BoxLogo>
        <Logo src="./assets/logo.png"></Logo>
        <Titulo>ZapRecall</Titulo>
      </BoxLogo>
      {PerguntasARR.map((pergunta) => (
        <Perguntas
          key={pergunta.numero}
          numero={pergunta.numero}
          texto={pergunta.texto}
          resposta={pergunta.resposta}
        />
      ))}
      <Baixo> </Baixo>
    </Main>
  );
}
