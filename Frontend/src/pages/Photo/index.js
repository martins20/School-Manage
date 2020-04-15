import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import axios from '../../services/api';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import { Container } from '../../styles/global';
import { Title, Form } from './styles';

export default function Photo({ match }) {
  const [photo, setPhoto] = useState('');
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  useEffect(() => {
    async function Data() {
      try {
        const { data } = await axios.get(`students/${id}`);
        setPhoto(get(data, 'Photos[0].url', ''));
      } catch (err) {
        toast.error('Error getting an image');
        history.push('/');
      }
    }

    Data();
    // eslint-disable-next-line
  }, []);

  async function handleChange(e) {
    const photoFile = e.target.files[0];
    const fotoURL = URL.createObjectURL(photoFile);

    setPhoto(fotoURL);

    const formData = new FormData();
    formData.append('student_id', id);
    formData.append('file', photoFile);

    try {
      await axios.post('/photos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Photo sent successfully!');
      history.push('/');
    } catch (err) {
      const { status } = get(err, 'response', '');
      toast.error('Error uploading photo.');

      if (status === 401) dispatch(actions.loginFailure());
    }
  }

  return (
    <Container>
      <Title>Photo</Title>
      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="foto" /> : 'Selecionar'}
          <input type="file" id="photo" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
