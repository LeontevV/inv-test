import React, { memo } from 'react';
import Label from '../../components/Label/Label';

import style from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className='containerSignUp'>
      <Label />
      <button className={style.createAccount}>Create account</button>
    </div>
  );
}
export default memo(SignUpPage);
