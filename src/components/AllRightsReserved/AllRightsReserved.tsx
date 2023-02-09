import React from 'react';

import style from './AllRightsReserved.module.scss';

function AllRightsReserved() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <div className={style.allRightsReserved}>
      © {year} Semiotech. All rights reserved. Terms, Privacy
    </div>
  );
}
export default AllRightsReserved;
