import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  button {
    font-size: 1.8rem;
    font-weight: bold;
    color: #09F;
    margin-top: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`
