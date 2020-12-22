import React from 'react';
import { Redirect } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Logout = () => {
  // тут написать код чтобы выйти
  const cookies = new Cookies();
  cookies.set('user', '')
  return (<Redirect to="/"/>);
}

export default Logout;
