import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function myRoute({ componet: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} componet={Component} />;
}
