import React from 'react';

import style from './LowerBlock.module.scss';

function LowerBlock() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className={style.container}>
      <div className={style.text}>© {year} Semiotech.</div>
      <a className={style.text} href='http://'>
        Terms,
      </a>
      <a className={style.text} href='http://'>
        Privacy
      </a>
    </div>
  );
}
export default LowerBlock;
