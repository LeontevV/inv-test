import React from 'react';

import style from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
