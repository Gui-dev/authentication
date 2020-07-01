import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
    height: 100%;
  }

  input, button {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
    outline: none;
  }
`