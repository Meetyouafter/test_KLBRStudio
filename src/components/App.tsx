import React from 'react';
import UsersPage from './UsersPage/UsersPage';
import users from '../services/users';
import './reset_styles.scss';

const App = () => (
  <UsersPage users={users} />
);

export default App;
