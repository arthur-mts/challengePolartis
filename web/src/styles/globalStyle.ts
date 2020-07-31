import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  overflow: scroll;
  ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #5E5D5C;
    color: #FFF;

    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    color: #FFF;
    cursor: pointer;
    background-color: #2E5266;
  }

`;
