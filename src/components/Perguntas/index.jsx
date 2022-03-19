import { BoxPergunta, NumeroPergunta } from "./style.js";

export default function Perguntas(props) {
  return (
    <BoxPergunta>
        <NumeroPergunta> { props.numero } </NumeroPergunta>
        <ion-icon name="play-outline"></ion-icon>
    </BoxPergunta>
  );
}

/*function PerguntasAbertas(props) {
  return (
    <BoxResposta>
        <TextoPergunta> { props.texto } </TextoPergunta>
        <ion-icon name="refresh"></ion-icon>
    </BoxResposta>
  );
}

export default function Resposta(props) {
  return (
    <BoxResposta>
        <TextoPergunta> { props.resposta } </TextoPergunta>
        <Butoes>
          <NaoLembrei>Não lembrei</NaoLembrei>
          <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
          <Zap>Zap!</Zap>
        </Butoes>
    </BoxResposta>
  );
}

export default function PerguntasRespondidas(props) {
  return (
    <BoxPergunta>
        <TextoPergunta> { props.numero } </TextoPergunta>
        <ion-icon name= {props.icon}></ion-icon>
    </BoxPergunta>
  );
}
*/