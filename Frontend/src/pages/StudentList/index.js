import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/global';
import { UserContainer, ProfilePicture, NewStudent } from './styles';
import axios from '../../services/api';

export default function StudentList() {
  const [users, setUsers] = useState([]);

  function handleDeleteAsk(e) {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    e.currentTarget.remove();
    exclamation.setAttribute('display', 'block');
  }

  async function handleDelete(e, id, index) {
    e.persist();
    try {
      await axios.delete(`/students/${id}`);

      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
    } catch (err) {
      const status = get(err, 'response.data.status', []);
      if (status === 401) {
        toast.error('Login is required for that action.');
      }
    }
  }

  useEffect(() => {
    async function Data() {
      const response = await axios.get('/students');
      setUsers(response.data);
    }

    Data();
  }, []);
  return (
    <Container>
      <h1>Students</h1>

      <NewStudent to="/student">New Student</NewStudent>
      <UserContainer>
        {users.map((user, index) => (
          <div key={String(user.id)}>
            <ProfilePicture>
              {get(user, 'Photos[0].url', false) ? (
                <img src={user.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{user.name}</span>
            <span>{user.email}</span>

            <Link to={`/student/${user.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/student/${user.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              onClick={(e) => handleDelete(e, user.id, index)}
              size={16}
              display="none"
              cursor="pointer"
            />
          </div>
        ))}
      </UserContainer>
    </Container>
  );
}
