import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    cursor: pointer;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;
