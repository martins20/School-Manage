import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/global';
import { Form } from './styles';
import axios from '../../services/api';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;

      toast.error('Name should be 3 and 255 characters.');
      return;
    }

    if (!isEmail(email)) {
      formErrors = true;

      toast.error('E-mail invalid.');
      return;
    }

    if (password.length < 3 || password.length > 50) {
      formErrors = true;

      toast.error('Password should be 6 and 50 characters.');
      return;
    }

    if (formErrors) return;

    try {
      await axios.post('/users', { name, password, email });

      toast.success('User Created with Success !');
      toast.success('Redirecting to Home Page ...');

      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors');

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Faça um Registro de sua Conta</h1>

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

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
