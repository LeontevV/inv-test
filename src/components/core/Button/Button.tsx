import React from 'react';

import style from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick(): void;
  children: React.ReactNode;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} type='button' className={style.button}>
      {children}
    </button>
  );
}

export default Button;
