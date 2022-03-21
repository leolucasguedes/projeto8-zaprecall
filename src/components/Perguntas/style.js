import styled from "styled-components";

export const BoxPergunta = styled.div`
   width: 300px;
   height: 65px;
   background-color: #FFFFFF;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 5px;
   box-shadow: 0 4 5 0 #000000 15%;
   margin-bottom: 15px;

   ion-icon{
    font-size: 23px;
    color: #333333;
    margin-right: 15px;
   }
`;

export const NumeroPergunta = styled.h1`
  font-size: 16px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 19.2px;
  color: #333333;
  margin-left: 15px;
`;



export const BoxResposta = styled.div`
   width: 299px;
   height: 131px;
   background-color: #FFFFFF;
   border-radius: 5px;
   box-shadow: 0 4 5 0 #000000 15%;
   margin-bottom: 25px;
   position: relative;

   ion-icon{
    font-size: 25px;
    color: #333333;
    margin-right: 15px;
    margin-right: 6px;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export const TextoPergunta = styled.h1`
  font-size: 18px;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 21.6px;
  color: #333333;
  margin-left: 15px;
  margin-top: 16px;
`;

export const Butoes = styled.div`
  width: 299px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NaoLembrei = styled.button`
   width: 85.17px;
   height: 37.17px;
   background-color: #FF3030;
   border-radius: 5px;
   font-size: 12px;
   font-family: 'Recursive', sans-serif;
   font-weigth: 400;
   font-style: normal;
   line-height: 14.4px;
   text-align: center;
   color: #FFFFFF;
`;

export const QuaseNaoLembrei = styled.button`
  width: 85.17px;
  height: 37.17px;
  background-color: #FF922E;
  border-radius: 5px;
  font-size: 12px;
  font-family: "Recursive", sans-serif;
  font-weigth: 400;
  font-style: normal;
  line-height: 14.4px;
  text-align: center;
  color: #ffffff;
`;

export const Zap = styled.button`
  width: 85.17px;
  height: 37.17px;
  background-color: #2FBE34;
  border-radius: 5px;
  font-size: 12px;
  font-family: "Recursive", sans-serif;
  font-weigth: 400;
  font-style: normal;
  line-height: 14.4px;
  text-align: center;
  color: #ffffff;
`;

export const RespostaCerta = styled.h1`
  font-size: 16px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 21.6px;
  color: #2FBE34;
  margin-left: 15px;
  margin-top: 5px;
  text-decoration: line-through; 
`;

export const RespostaQuase = styled.h1`
  font-size: 16px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 21.6px;
  color: #FF922E;
  margin-left: 15px;
  margin-top: 5px;
  text-decoration: line-through; 
`;

export const RespostaErrada = styled.h1`
  font-size: 16px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 21.6px;
  color: #FF3030;
  margin-left: 15px;
  margin-top: 5px;
  text-decoration: line-through; 
`;