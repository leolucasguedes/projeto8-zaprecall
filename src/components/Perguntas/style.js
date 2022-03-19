import styled from "styled-components";

export const BoxPergunta = styled.div`
   width: 182px;
   height: 40px;
   background-color: #FFFFFF;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 5px;
   box-shadow: 0 4 5 0 #000000 15%;
   margin-bottom: 5px;

   ion-icon{
     
   }
`;

export const NumeroPergunta = styled.h1`
  font-size: 12px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 14.4px;
  color: #333333;
  margin-left: 6px;
`;

/*export const IconePergunta = styled.ion-icon`
   font-size: 15px;
   color: #333333;
`;*/







export const BoxResposta = styled.div`
   width: 182px;
   height: 80px;
   background-color: #FFFFFF;
   border-radius: 5px;
   box-shadow: 0 4 5 0 #000000 15%;
   margin-bottom: 14px;
`;

export const TextoPergunta = styled.h1`
  font-size: 12px;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 14.4px;
  color: #333333;
  margin-left: 6px;
  margin-top: 13px;
`;

/*export const IconeVirar = styled.ion-icon`
   font-size: 15px;
   color: #333333;
`;*/

export const Butoes = styled.button`
  width: 182px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NaoLembrei = styled.button`
   width: 155px;
   height: 24px;
   background-color: #FF3030;
   border-radius: 5px;
   font-size: 7px;
   font-family: 'Recursive', sans-serif;
   font-weigth: 400;
   font-style: normal;
   line-height: 8.4px;
   text-align: center;
   color: #FFFFFF;
`;

export const QuaseNaoLembrei = styled.button`
  width: 155px;
  height: 24px;
  background-color: #FF922E;
  border-radius: 5px;
  font-size: 7px;
  font-family: "Recursive", sans-serif;
  font-weigth: 400;
  font-style: normal;
  line-height: 8.4px;
  text-align: center;
  color: #ffffff;
`;

export const Zap = styled.button`
  width: 155px;
  height: 24px;
  background-color: #2FBE34;
  border-radius: 5px;
  font-size: 7px;
  font-family: "Recursive", sans-serif;
  font-weigth: 400;
  font-style: normal;
  line-height: 8.4px;
  text-align: center;
  color: #ffffff;
`;

export const RespostaCerta = styled.h1`
  font-size: 12px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 14.4px;
  color: #2FBE34;
  margin-left: 6px;
`;

/*export const IconeCerto = styled.ion-icon`
   font-size: 15px;
   color: #2FBE34;
`;
<ion-icon name="checkmark-circle"></ion-icon>*/

export const RespostaQuase = styled.h1`
  font-size: 12px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 14.4px;
  color: #FF922E;
  margin-left: 6px;
`;

/*export const IconeQuase = styled.ion-icon`
   font-size: 15px;
   color: #FF922E;
`;
<ion-icon name="help-circle"></ion-icon>*/

export const RespostaErrada = styled.h1`
  font-size: 12px;
  font-family: 'Recursive', sans-serif;
  font-weight: 700;
  font-style: bold;
  line-height: 14.4px;
  color: #FF3030;
  margin-left: 6px;
`;

/*export const IconeErrado = styled.ion-icon`
   font-size: 15px;
   color: #2FBE34;
`;
<ion-icon name="close-circle"></ion-icon>*/