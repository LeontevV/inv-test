import React from 'react';
import instance from '../../api/axios';

import style from './Header.module.scss';

function Header() {
  const responseUser = async () => {
    const response = await instance.get('/user');
    console.log('res', response);

    return response;
  };
  responseUser();
  console.log('responseUser', responseUser);

  return (
    <div className={style.container}>
      <div className={style.boxLeft}>
        <div>Projects</div>
        <div>Users</div>
        <div>Search</div>
      </div>
      <div className={style.boxRight}>
        <div>Notifications</div>
        <div>user</div>
        <img></img>
      </div>
    </div>
  );
}

export default Header;
