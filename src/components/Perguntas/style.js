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
    font-size: 15px;
    color: #333333;
    margin-right: 6px;
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