import React, { useEffect, useState } from 'react';
import { IUser } from '../../redux/api/types';
import { setUser } from '../../redux/reducers/userSlice';
import { useGetUserMutation } from '../../redux/api/userApi';

import style from './Header.module.scss';
import { useAppDispatch } from '../../redux/store';

function Header() {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const dispatch = useAppDispatch();
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    const response = async () => {
      const { data } = await getUser();
      setUserInfo(data);
      dispatch(setUser(data));
    };
    response();
  }, []);

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
