import React from 'react';
import { toast } from 'react-toastify';

import { Title } from './styles';
import { Container } from '../../styles/global';

export default function Login() {
  return (
    <Container>
      <Title>Pagina de Login</Title>
      <button>Enviar</button>
    </Container>
  );
}
