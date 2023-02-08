import React, { memo } from 'react';
import Button from '../../components/core/Button/Button';
import Label from '../../components/Label/Label';
import LinkBlock from '../../components/LinkButton/LinkButton';

import style from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className={style.containerSignUp}>
      <Label />
      <Button title='create account' />
      <LinkBlock title='Login' question='Already have an account?' href='' />
    </div>
  );
}
export default memo(SignUpPage);
