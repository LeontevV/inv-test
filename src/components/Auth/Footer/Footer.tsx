import React from 'react';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

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

export default Footer;
