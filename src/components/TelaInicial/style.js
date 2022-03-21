import styled from "styled-components";

export const Main = styled.main`
   width: 100%;
   height: 100%;
   background-color: #FB6B6B;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   z-index: 1;
`;

export const Logo = styled.img`
   width: 136px;
   height: 161px;
`;

export const Titulo = styled.h1`
   font-size: 36px;
   font-family: 'Righteous', cursive;
   font-weight: 400;
   line-height: 44.7px;
   letter-spacing: -1.2%;
   text-align: center;
   color: #FFFFFF;
   margin-top: 13px;
`;

export const Inicio = styled.button`
   width: 246px;
   height: 54px;
   margin-top: 73px;
   background-color: #FFFFFF;
   border: solid 1px #D70900;
   border-radius: 5px;
   box-shadow: 0 4 4 0 #000000 15%;
   font-size: 18px;
   font-family: 'Recursive', sans-serif;
   font-weigth: 400;
   font-style: normal;
   line-height: 21.6px;
   text-align: center;
   color: #D70900;
`;