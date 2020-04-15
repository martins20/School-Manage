import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  header {
    width: 100%
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family:  Rotobo, sans-serif;
    font-size: 16px;
    background: #f1f1f1;

  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  button {
    font-family: Roboto, sans-serif;
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    padding: 10px 20px;
    color: #FFF;
    border-radius: 4px;
    font-weight: 700;
    transition: filter 300ms;

    :hover {
      filter: brightness(85%)
    }

  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  ul {
    list-style: none;
  }

  /* Mudar o styledo toastify */
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }

`;

export const Container = styled.section`
  width: 90%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
