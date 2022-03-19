import Perguntas from '../Perguntas';
import { Main, BoxLogo, Logo, Titulo } from "./style.js";

export default function Cards() {
  const PerguntasARR = [
    {numero :"Pergunta 1"}, {numero :"Pergunta 2"}, {numero :"Pergunta 3"},
    {numero :"Pergunta 4"}, {numero :"Pergunta 5"}, {numero :"Pergunta 6"}, 
    {numero :"Pergunta 7"}, {numero :"Pergunta 8"}]
    return (
      <Main>
        <BoxLogo>
          <Logo src="./assets/logo.png"></Logo>
          <Titulo>ZapRecall</Titulo>
        </BoxLogo>
        {PerguntasARR.map((pergunta, index) => <Perguntas key={pergunta.index} numero={pergunta.numero} />)}
      </Main>
    );
  }