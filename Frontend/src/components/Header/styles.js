import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const Nav = styled.header`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  flex-direction: table-row;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: 700;
  }
`;
