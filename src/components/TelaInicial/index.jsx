import { Main, Logo, Titulo, Inicio } from "./style.js";
import { useState } from "react";

export default function TelaInicial() {
  const [visivel, setVisivel] = useState(true);
  return visivel ? (
    <Main>
      <Logo src="./assets/logo.png"></Logo>
      <Titulo>ZapRecall</Titulo>
      <Inicio onClick={() => setVisivel(false)}>Iniciar Recall!</Inicio>
    </Main>
  ) : (
    ""
  );
}
