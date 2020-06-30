import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Lato', sans-serif;
  }

  input, button {
    font-family: 'Lato', sans-serif;
    outline: none;
  }
`