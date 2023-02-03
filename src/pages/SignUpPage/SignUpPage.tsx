import React, { memo } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';

import './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className='containerSignUp'>
      <CustomInput title='First name' name='name' />
    </div>
  );
}
export default memo(SignUpPage);
