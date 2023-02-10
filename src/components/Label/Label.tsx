import React from 'react';

import style from './Label.module.scss';

function Label() {
  return (
    <div className={style.labelContainer}>
      <div className={style.labelText}>Sign up</div>
    </div>
  );
}
export default Label;
