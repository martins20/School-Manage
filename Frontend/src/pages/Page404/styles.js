import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Container = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  small {
    color: ${primaryColor};
    font-weight: 700;
    font-size: 3px;
    letter-spacing: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  color: #a80048;
`;
