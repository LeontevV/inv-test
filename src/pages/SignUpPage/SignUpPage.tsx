import React, { memo } from 'react';
import Label from '../../components/Label/Label';

import './SignUpPage.module.css';

function SignUpPage() {
  return (
    <div className='containerSignUp'>
      <Label />
    </div>
  );
}
export default memo(SignUpPage);
