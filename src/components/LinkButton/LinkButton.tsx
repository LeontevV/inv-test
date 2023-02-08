import React from 'react';

import style from './LinkButton.module.scss';

interface LinkBlockProps {
  title: string;
  question: string;
  href: string;
}

function LinkBlock({ question, title, href }: LinkBlockProps) {
  return (
    <div className={style.containerLinkBlock}>
      <div>{question}</div>
      <a href={href}>{title}</a>
    </div>
  );
}
export default LinkBlock;
