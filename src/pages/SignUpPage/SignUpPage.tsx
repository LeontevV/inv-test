import React, { memo } from 'react';
import Label from '../../components/Label/Label';

import style from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className={style.containerSignUp}>
      <Label />
    </div>
  );
}
export default memo(SignUpPage);
