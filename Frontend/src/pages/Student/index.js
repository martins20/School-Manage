import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Form,
  ProfilePicture,
  Title,
  StudentContainer,
  RightContainer,
  LeftContainer,
} from './styles';
import axios from '../../services/api';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import Photo from '../Photo';

export default function Student({ match }) {
  const id = get(match, 'params.id', false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function Data() {
      try {
        const { data } = await axios.get(`students/${id}`);
        const dataPhoto = get(data, 'Photos[0].url', '');

        setPhoto(dataPhoto);

        setName(data.name);
        setEmail(data.email);
        setLastname(data.lastname);
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);
      } catch (err) {
        const status = get(err, 'response.status', false);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }

    Data();
    // eslint-disable-next-line
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Name must be between 3 and 255 characters.');
    }

    if (lastname.length < 3 || lastname.length > 255) {
      formErrors = true;
      toast.error('LastName must be between 3 and 255 characters.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail invalid.');
    }

    if (!isInt(String(age))) {
      formErrors = true;
      toast.error('Age must be an integer.');
    }

    if (!isFloat(String(weight))) {
      formErrors = true;
      toast.error('Wheight must be an integer or float.');
    }

    if (!isFloat(String(height))) {
      formErrors = true;
      toast.error('Heigth must be an integer or float.');
    }

    if (formErrors) return;

    try {
      if (id) {
        await axios.put(`/students/${id}`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });
        toast.success('Student edit with success !');
        history.push('/');
      } else {
        await axios.post(`/students`, {
          name,
          lastname,
          email,
          age,
          weight,
          height,
        });

        toast.success('Student created with success !');
        history.push('/');
      }
    } catch (err) {
      const status = get(err, 'response.status', false);
      const data = get(err, 'response.data', []);
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('unknown Error');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <StudentContainer>
      <LeftContainer>
        <Title>{id ? 'Editar Dados' : 'Novo Aluno'} </Title>

        {!id && (
          <ProfilePicture>
            <FaUserCircle size={300} color="#a80048" />
          </ProfilePicture>
        )}

        {id && (
          <ProfilePicture>
            {photo ? (
              <Link to={`/photo/${id}`}>
                <img src={photo} alt={name} size={300} />
              </Link>
            ) : (
              <Link to={`/photo/${id}`}>
                <FaUserCircle size={300} color="#a80048" />
              </Link>
            )}
          </ProfilePicture>
        )}
      </LeftContainer>
      <RightContainer>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Sobrenome"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Idade"
          />
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Peso"
          />
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Altura"
          />

          <button type="submit">{id ? 'Editar' : 'Criar'}</button>
        </Form>
      </RightContainer>
    </StudentContainer>
  );
}
