import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.default};
    color: ${colors.white};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  body, input, button {
    font-family:"Roboto Slab", serif;
    font-size:  16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
