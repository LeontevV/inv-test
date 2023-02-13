import React from 'react';

import style from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
