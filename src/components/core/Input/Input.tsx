import React, { useState, InputHTMLAttributes } from 'react';
import { ReactComponent as CrossedOutEye } from '../../../assets/svg/crossedOutEye.svg';
import { ReactComponent as Eye } from '../../../assets/svg/eye.svg';

import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  title: string;
  name: string;
  value: string;
}

function Input({ type, title, name, value }: InputProps) {
  const [error, setError] = useState(false);
  const [inputType, setInputType] = useState(type);

  return (
    <div className={style.inputContainer}>
      <div className={style.labelContainer}>
        <label className={style.inputTitle}>{title}</label>
        {error && <div className={style.errorText}>Requiered field</div>}
      </div>
      <div className={error ? style.errorInput : style.inputElement}>
        <input
          className={style.input}
          type={inputType}
          placeholder={title}
          name={name}
          value={value}
        />
        {type === 'password' && (
          <button
            className={style.buttonEye}
            type='button'
            onClick={() => setInputType(inputType === 'text' ? type : 'text')}
          >
            {inputType === 'text' ? <Eye /> : <CrossedOutEye />}
          </button>
        )}
      </div>
    </div>
  );
}
export default Input;
