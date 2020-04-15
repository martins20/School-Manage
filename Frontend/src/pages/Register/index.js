import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/global';
import { Form, Title } from './styles';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const { id, name: nameStored, email: emailStored } = useSelector(
    (state) => state.auth.user
  );

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!id) return;

    setName(nameStored);

    setEmail(emailStored);
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;

      toast.error('Name should be 3 and 255 characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;

      toast.error('E-mail invalid.');
    }

    if (!id && (password.length < 3 || password.length > 50)) {
      formErrors = true;
      toast.error('Password should be 6 and 50 characters.');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ name, email, password, id }));
  }

  return (
    <Container>
      <Title>{id ? 'Editar Dados' : 'Faça um Registro de sua Conta'}</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu Nome"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            htmlFor="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor E-mail"
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua Senha"
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}
