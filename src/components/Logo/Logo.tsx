import React from 'react';

import Image from '../../assets/image/semiotech.png';

import './Logo.css';

function Logo() {
  return (
    <div className='containerHeader'>
      <img className='logo' src={Image} alt='' />
      <div />
    </div>
  );
}
export default Logo;
