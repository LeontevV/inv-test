import React, { memo } from 'react';
import Label from '../../components/Label/Label';

import './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className='containerSignUp'>
      <Label />
    </div>
  );
}
export default memo(SignUpPage);
