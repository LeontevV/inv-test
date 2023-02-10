import React from 'react';
import { Link } from 'react-router-dom';

import style from './LowerBlock.module.scss';

function LowerBlock() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className={style.container}>
      <div className={style.text}>© {year} Semiotech.</div>
      <div className={style.linkBlock}>
        <Link className={style.text} to='/'>
          Terms
        </Link>
        <Link className={style.text} to='/'>
          Privacy
        </Link>
      </div>
    </div>
  );
}
export default LowerBlock;
