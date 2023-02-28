import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import instance from '../../api/axios';
import { IUser } from '../../redux/api/types';
import { setUser } from '../../redux/reducers/userSlice';

import style from './Header.module.scss';

function Header() {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const dispatch = useDispatch();

  const responseUser = () => {
    const requestUser = async () => {
      const response = await instance.get('/user');
      setUserInfo(response.data);
      dispatch(setUser(response.data));
    };
    requestUser();
  };

  useEffect(() => responseUser(), []);
  console.log('userInfo', userInfo);

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.item}>Projects</div>
        <div className={style.item}>Users</div>
        <div className={style.item}>Search</div>
      </div>
      <div className={style.box}>
        <div className={style.item}>Notifications</div>
        {userInfo ? (
          <div className={style.user}>
            {userInfo.firstName} {userInfo.lastName}
          </div>
        ) : null}
        <img className={style.image}></img>
      </div>
    </div>
  );
}

export default Header;
