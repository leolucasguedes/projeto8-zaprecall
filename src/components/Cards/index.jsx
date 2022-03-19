import Perguntas from "../Perguntas";
import { Main, BoxLogo, Logo, Titulo } from "./style.js";
import { useState } from "react";

export default function Cards() {
  const [etapa, setEtapa] = useState("primeira");
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
  if (etapa === "primeira") {
    return (
      <Main>
        <BoxLogo>
          <Logo src="./assets/logo.png"></Logo>
          <Titulo>ZapRecall</Titulo>
        </BoxLogo>
        {PerguntasARR.map((pergunta) => (
          <Perguntas onClick={() => setEtapa("segunda")} key={pergunta.numero} numero={pergunta.numero} />
        ))}
      </Main>
    );
  }
  if (etapa === "segunda") {
    return (
      <div className="boxResposta">
        <h1 className="textoPergunta"> {props.texto} </h1>
        <ion-icon onClick={() => setEtapa("terceira")} name="refresh"></ion-icon>
      </div>
    );
  }
  if (etapa === "terceira") {
    return (
      <div className="boxResposta">
        <h1 className="textoPergunta"> {props.resposta} </h1>
        <div className="butoes">
          <button onClick={() => setEtapa("ultima")} className="naoLembrei">Não lembrei</button>
          <button className="quaseNaoLembrei">Quase não lembrei</button>
          <button className="zap">Zap!</button>
        </div>
      </div>
    );
  }
  if (etapa === "ultima"){
    return(
      <div className="boxPergunta">
        <h1 className="respostaErrada"> { props.numero } </h1>
        <ion-icon name="close-circle"></ion-icon>
    </div>
    )
  }
}
