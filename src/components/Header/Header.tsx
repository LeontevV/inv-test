import React from 'react';
import { useUserQuery } from '../../redux/api/userApi';

import style from './Header.module.scss';

function Header() {
  const { data } = useUserQuery();

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.item}>Projects</div>
        <div className={style.item}>Users</div>
        <div className={style.item}>Search</div>
      </div>
      <div className={style.box}>
        <div className={style.item}>Notifications</div>
        {data && (
          <div className={style.user}>
            {data.firstName} {data.lastName}
          </div>
        )}
        <img className={style.image}></img>
      </div>
    </div>
  );
}

export default Header;
