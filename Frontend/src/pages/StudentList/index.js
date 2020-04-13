import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/global';
import { UserContainer, ProfilePicture } from './styles';
import axios from '../../services/api';

export default function StudentList() {
  const [users, setUsers] = useState([]);

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
      <UserContainer>
        {users.map((user) => (
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
            <Link to={`/student/${user.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </UserContainer>
    </Container>
  );
}
