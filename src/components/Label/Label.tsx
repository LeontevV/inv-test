import React from 'react';
import LoginBackGround from '../../assets/svg/LoginBackGround';

import style from './Label.module.css';

function Label() {
  console.log(style);

  return (
    <div className={style.labelText}>
      <LoginBackGround />
      <div className={style.labelText} style={{ backgroundImage: { LoginBackGround } }}>
        Sign up
      </div>
    </div>
  );
}
export default Label;
