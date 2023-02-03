import React from 'react';
import loginBackGround from '../../assets/svg/loginBackGround.svg';

import style from './Label.module.scss';

function Label() {
  return (
    <div className={style.labelText}>
      <div className={style.labelText} style={{ backgroundImage: `url(${loginBackGround})` }}>
        Sign up
      </div>
    </div>
  );
}
export default Label;
