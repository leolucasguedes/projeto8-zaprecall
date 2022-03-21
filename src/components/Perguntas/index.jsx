import {
  BoxPergunta,
  NumeroPergunta,
  BoxResposta,
  TextoPergunta,
  Butoes,
  NaoLembrei,
  QuaseNaoLembrei,
  Zap,
  RespostaCerta,
  RespostaQuase,
  RespostaErrada,
} from "./style.js";
import { useState } from "react";

export default function Perguntas(props) {
  const [etapa, setEtapa] = useState("primeira");

  if (etapa === "primeira") {
    return (
      <BoxPergunta onClick={() => setEtapa("segunda")}>
        <NumeroPergunta> {props.numero} </NumeroPergunta>
        <ion-icon name="play-outline"></ion-icon>
      </BoxPergunta>
    );
  }
  if (etapa === "segunda") {
    return (
      <BoxResposta>
        <TextoPergunta> {props.texto} </TextoPergunta>
        <ion-icon onClick={() => setEtapa("terceira")} name="refresh"></ion-icon>
      </BoxResposta>
    );
  }
  if (etapa === "terceira") {
    return (
      <BoxResposta>
        <TextoPergunta> {props.resposta} </TextoPergunta>
        <Butoes>
          <NaoLembrei onClick={() => setEtapa("naolembrei")}>Não lembrei</NaoLembrei>
          <QuaseNaoLembrei onClick={() => setEtapa("quasenaolembrei")}>Quase não lembrei</QuaseNaoLembrei>
          <Zap onClick={() => setEtapa("lembrei")}>Zap!</Zap>
        </Butoes>
      </BoxResposta>
    );
  }
  if (etapa === "naolembrei") {
    return (
      <BoxPergunta>
        <RespostaErrada> {props.numero} </RespostaErrada>
        <ion-icon name="close-circle"></ion-icon>
      </BoxPergunta>
    );
  }
  if (etapa === "quasenaolembrei") {
    return (
      <BoxPergunta>
        <RespostaQuase> {props.numero} </RespostaQuase>
        <ion-icon name="help-circle"></ion-icon>
      </BoxPergunta>
    );
  }
  if (etapa === "lembrei") {
    return (
      <BoxPergunta>
        <RespostaCerta> {props.numero} </RespostaCerta>
        <ion-icon name="checkmark-circle"></ion-icon>
      </BoxPergunta>
    );
  }
}
