import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const HeaderContainer = styled.header`
  width: 100%;
  background: #fff;
  display: flex;

  ul {
    display: flex;
    width: 100%;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 10px;

    :first-child {
      margin-right: auto;
    }
  }
  li a {
    color: ${primaryColor};

    :hover {
      color: #a80048;
    }
  }
`;
