import styled, { createGlobalStyle } from 'styled-components';

import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family:  Rotobo, sans-serif;
    font-size: 16px;
    background: ${primaryDarkColor};

  }

  html, body, #root {
    height: 100%
  }

  button {
    font-family: Roboto, sans-serif;
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    padding: 10px 20px;
    color: #FFF;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${primaryColor}
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
