import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    transition: border 0.5s;

    &:focus {
      transition: border 0.5s;
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: ${colors.primaryColor};
  font-size: 2.5em;
`;
