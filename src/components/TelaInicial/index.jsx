import { Main, Logo, Titulo, Inicio } from "./style.js";

export default function TelaInicial() {
    return (

      <Main>
          <Logo src="./assets/logo.png"></Logo>
          <Titulo>ZapRecall</Titulo>
          <Inicio>Iniciar Recall!</Inicio>
          
       
      </Main>
    );
  }