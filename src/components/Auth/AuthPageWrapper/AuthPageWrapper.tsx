import React from 'react';
import Label from '../../Label/Label';
import Logo from '../../Logo/Logo';
import { ReactComponent as Elipsis } from '../../../assets/svg/elipsis.svg';

import style from './AuthPageWrapper.module.scss';
import Footer from '../Footer/Footer';
type AuthPageWrapperProps = {
  title: string;
  children: JSX.Element;
  onChange(event: React.SyntheticEvent): void;
};

function AuthPageWrapper({ title, children, onChange }: AuthPageWrapperProps) {
  return (
    <div className={style.containerAuth}>
      <Logo />
      <div className={style.box}>
        <form onChange={onChange} className={style.authForm}>
          <Label title={title} />
          {children}
        </form>
        <Elipsis className={style.elipsis} />
        <Footer />
      </div>
    </div>
  );
}

export default AuthPageWrapper;
