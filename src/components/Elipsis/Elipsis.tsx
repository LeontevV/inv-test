import React from 'react';

import style from './Elipsis.module.scss';

function Elipsis() {
  return (
    <div className={style.elipsisBlock}>
      <div className={style.bigElipsis}>
        <div className={style.smallElipsis}></div>
      </div>
    </div>
  );
}
export default Elipsis;
