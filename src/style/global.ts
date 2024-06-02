import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: 0;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #b0daea;
  }
  .grass{
    background-color: #66a945;
   }
  .fire{
     background-color: #e56c3e;
   }
  .water{
     background-color: #5185c5;
   }
  .electric{
     background-color: #f6d851;
   }
  .ice{
     background-color: #6dc8eb
  }
  .fighting{
    background-color: #e09c40;
   }
  .poison{
     background-color: #735198;
   }
  .ground{
     background-color: #E0C068;
   }
  .flying{
     background-color: #a2c3e7;
   }
  .psychic{
     background-color: #dd6b7b;
  }
  .bug{
    background-color: #9fa244;
   }
  .rock{
     background-color: #bfb889;
   }
  .ghost{
     background-color: #684870;
   }
  .dragon{
     background-color: #535ca8;
   }
  .dark{
    background-color: #4c4948;
   }
  .steel{
     background-color: #69a9c7;
   }
  .fairy{
     background-color: #dab4d4;
   }
  .unknown{
     background-color: #606060;
   }
   .normal{
     background-color: #949495;
   }
`;
