import React from 'react';

import style from './Label.module.scss';

type LabelProps = {
  title: string;
};

function Label({ title }: LabelProps) {
  return <div className={style.labelText}>{title}</div>;
}
export default Label;
