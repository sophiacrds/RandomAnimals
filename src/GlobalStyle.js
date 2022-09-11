import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: black; // important to reset the default mode of IOS buttons
    background-color: white;
  }

  #root{
    width: 100%;
    height: 100vh;
  }
`;
