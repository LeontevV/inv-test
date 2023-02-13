import React from 'react';

import style from './Button.module.scss';

function Button({ children }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={style.button}>{children}</button>;
}

export default Button;
