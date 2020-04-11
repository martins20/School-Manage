import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './config/MyRoute';

import Student from './pages/Student';
import StudentList from './pages/StudentList';
import Photo from './pages/Photo';
import Register from './pages/Register';
import Login from './pages/Login';
import Page404 from './pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={StudentList} />

      <MyRoute exact path="/student/:id/edit" component={Student} isClosed />
      <MyRoute exact path="/student" component={Student} isClosed />
      <MyRoute exact path="/photos" component={Photo} isClosed />

      <MyRoute exact path="/register" component={Register} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
