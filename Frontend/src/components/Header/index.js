import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../services/history';

import * as actions from '../../store/modules/auth/actions';

import { HeaderContainer } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function handleLogout(e) {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/login');
  }

  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link to="/">
            <h1>School Manage</h1>
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/register">
              <p>Editar</p>
            </Link>
          ) : (
            <Link to="/register">
              <p>Registrar</p>
            </Link>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <Link onClick={handleLogout} to="/login">
              <p>Sair</p>
            </Link>
          ) : (
            <Link to="/login">
              <p>Entrar</p>
            </Link>
          )}
        </li>
      </ul>
    </HeaderContainer>
  );
}
