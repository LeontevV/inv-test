import React, { memo } from 'react';

import { ReactComponent as Elipsis } from '../../assets/svg/elipsis.svg';
import Label from '../../components/Label/Label';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import Footer from '../../components/Auth/Footer/Footer';

import style from './SuccessPage.module.scss';

function SuccessPage() {
  return (
    <div className={style.container}>
      <Logo />
      <div className={style.box}>
        <Label />
        <text>
          To complete your registration and get started, you&apos;ll need to verify your email by
          clicking the link in the email we just sent you.
        </text>
        <Link to='/'>Resend verification email</Link>
        <text>
          Thank you for signing up! Whether you&apos;re ready to streamline invalidity contentions
          or just want to check out the demo, we&apos;re happy to help in any way we can. Please
          don&apos;t hesitate to get in touch.
        </text>
        <Elipsis className={style.elipsis} />

        <Footer />
      </div>
    </div>
  );
}

export default memo(SuccessPage);
