import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --orange: #fa6e10;
    --offWhite: #f0f0f0;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
     background-color: #1a1b16;
  }


  button {
    background-color: transparent;
    border: none;
    font-family: inherit;
    cursor: pointer;
  }

  /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } */

  
  hr {
    border: 0;
    height: 8px;
  
  }

  img {
    max-width: 100%;
  }


`;

export default GlobalStyles;
