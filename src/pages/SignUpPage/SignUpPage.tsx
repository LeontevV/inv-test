import React, { memo } from 'react';
import Label from '../../components/Label/Label';

import style from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className={style.containerSignUp}>
      <Label />
      <button className={style.createAccount}>
        <div className={style.buttonText}>Create account</div>
      </button>
    </div>
  );
}
export default memo(SignUpPage);
