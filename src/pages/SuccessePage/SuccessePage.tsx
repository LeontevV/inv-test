import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';

import style from './SuccessPage.module.scss';

function SuccessPage() {
  const [seconds, setSeconds] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  const onClick = () => {
    setSeconds(120);
    setTimerActive(true);
  };

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  const timerElement = timerActive ? (
    <div className={style.timer}>Try again after: {seconds} seconds</div>
  ) : (
    <div></div>
  );

  return (
    <AuthPageWrapper title='Success'>
      <text className={style.text}>
        To complete your registration and get started, you&apos;ll need to verify your email by
        clicking the link in the email we just sent you.
      </text>
      <Link
        onClick={onClick}
        className={classNames({
          [style.link]: true,
          [style.disable]: timerActive,
        })}
        to=''
      >
        Resend verification email
      </Link>
      {timerElement}
      <text className={style.text}>
        Thank you for signing up! Whether you&apos;re ready to streamline invalidity contentions or
        just want to check out the demo, we&apos;re happy to help in any way we can. Please
        don&apos;t hesitate to get in touch.
      </text>
    </AuthPageWrapper>
  );
}

export default memo(SuccessPage);
