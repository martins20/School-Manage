import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styles';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      <Link to="/asdas">
        <FaUserAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Nao Clicado'}
    </Nav>
  );
}
