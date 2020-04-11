import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styles';
import { Container } from '../../styles/global';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.HandleButtonRequest());
  }
  return (
    <Container>
      <Title>Pagina de Login</Title>
      <button onClick={handleClick}>Enviar</button>
    </Container>
  );
}
