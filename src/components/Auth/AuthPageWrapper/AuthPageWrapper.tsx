import React from 'react';
import Label from '../../Label';
import Logo from '../../Logo';
import { ReactComponent as Elipsis } from '../../../assets/svg/elipsis.svg';
import Footer from '../Footer';

import style from './AuthPageWrapper.module.scss';

type AuthPageWrapperProps = {
  title: string;
  children: Array<JSX.Element>;
  onChange(event: React.SyntheticEvent): void;
};

function AuthPageWrapper({ title, onChange, children }: AuthPageWrapperProps) {
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
