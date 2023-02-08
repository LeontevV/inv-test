import classNames from 'classnames';
import React, { useState, InputHTMLAttributes } from 'react';
import { ReactComponent as CrossedOutEye } from '../../../assets/svg/crossedOutEye.svg';
import { ReactComponent as Eye } from '../../../assets/svg/eye.svg';
import { validateEmail, validateName, validatePassword } from '../../../utils/validate';

import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  title: string;
  isPasswordCoincidens?: boolean;
}

function Input({ type, title, name, value, isPasswordCoincidens }: InputProps) {
  const [errorType, setErrorType] = useState('');
  const [error, setError] = useState(false);
  const [inputType, setInputType] = useState(type);
  const onBlur = () => {
    const isValid = value !== '';
    setErrorType('Requiered field');
    setError(!isValid);
    if (name === 'password') {
      const isValidPassword = validatePassword(value);
      if (!isValidPassword) {
        setErrorType('Not correct password');
        setError(!isValidPassword);
      }
    }
    if (type === 'email') {
      const isValidEmail = validateEmail(value);
      if (!isValidEmail) {
        setErrorType('Not correct email');
        setError(!isValidEmail);
      }
    }
    if (type === 'text') {
      const isValidText = validateName(value);
      if (!isValidText) {
        setErrorType('Not correct name');
        setError(!isValidText);
      }
    }
    if (name === 'confirmPassword') {
      if (!isPasswordCoincidens) {
        setErrorType('Password not coincidens');
        setError(true);
      }
    }
  };

  return (
    <div className={style.inputContainer}>
      <div className={style.labelContainer}>
        <label className={style.inputTitle}>{title}</label>
        {error && <div className={style.errorText}>{errorType}</div>}
      </div>
      <div
        className={error ? classNames(style.inputElement, style.errorInput) : style.inputElement}
      >
        <input
          id={name}
          className={style.input}
          type={inputType}
          placeholder={title}
          name={name}
          value={value}
          onBlur={() => onBlur()}
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
