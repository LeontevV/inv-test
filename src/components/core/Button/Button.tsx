import React from 'react';

import style from './Button.module.scss';

function Button({ ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  return <button type='button' className={style.button} {...props} />;
}

export default Button;
