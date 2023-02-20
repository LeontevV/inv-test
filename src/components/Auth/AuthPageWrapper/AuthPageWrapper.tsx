import React from 'react';
import Label from '../../Label';
import Logo from '../../Logo';
import { ReactComponent as Elipsis } from '../../../assets/svg/elipsis.svg';
import Footer from '../Footer';

import style from './AuthPageWrapper.module.scss';

type AuthPageWrapperProps = {
  title?: string;
  children: Array<React.ReactNode>;
  isShow: boolean;
};

function AuthPageWrapper({ title, children, isShow }: AuthPageWrapperProps) {
  return (
    <div className={style.containerAuth}>
      {isShow && <Logo />}
      <div className={style.box}>
        <div className={style.authBox}>
          <Label title={title} />
          {children}
        </div>
        <Elipsis className={style.elipsis} />
        <Footer />
      </div>
    </div>
  );
}

export default AuthPageWrapper;
