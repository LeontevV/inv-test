import React, { memo, useState, useEffect } from 'react';
import classNames from 'classnames';

import AuthPageWrapper from '../../components/Auth/AuthPageWrapper';

import style from './SuccessPage.module.scss';

const TWO_MINUTES = 120;

function SuccessPage() {
  const [seconds, setSeconds] = useState(TWO_MINUTES);
  const [timerActive, setTimerActive] = useState(false);

  const onClick = () => {
    setSeconds(TWO_MINUTES);
    setTimerActive(true);
  };

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <AuthPageWrapper title='Success'>
      <text className={style.text}>
        To complete your registration and get started, you&apos;ll need to verify your email by
        clicking the link in the email we just sent you.
      </text>
      <button
        disabled={timerActive}
        type='button'
        onClick={onClick}
        className={classNames({
          [style.button]: true,
          [style.disable]: timerActive,
        })}
      >
        Resend verification email
      </button>
      {timerActive && <div className={style.timer}>Try again after: {seconds} seconds</div>}
      <text className={style.text}>
        Thank you for signing up! Whether you&apos;re ready to streamline invalidity contentions or
        just want to check out the demo, we&apos;re happy to help in any way we can. Please
        don&apos;t hesitate to get in touch.
      </text>
    </AuthPageWrapper>
  );
}

export default memo(SuccessPage);
