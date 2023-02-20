import classNames from 'classnames';
import React, { useState, InputHTMLAttributes } from 'react';
import { ReactComponent as CrossedOutEye } from '../../../assets/svg/crossedOutEye.svg';
import { ReactComponent as Eye } from '../../../assets/svg/eye.svg';
import { validateEmail, validateName, validatePassword } from '../../../utils/validate';

import style from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  title: string;
  errorMessage?: string;
}

function validate({ value, type, name }: { value: string; type?: string; name?: string }): string {
  if (name === 'name' || name === 'firstName' || name === 'lastName') {
    const isValid = validateName(value);

    return isValid ? '' : 'Not correct name';
  }

  switch (type) {
    case 'password': {
      const isValid = validatePassword(value);

      return isValid ? '' : 'Not correct password';
    }
    case 'email': {
      const isValid = validateEmail(value);

      return isValid ? '' : 'Not correct email';
    }
  }

  return '';
}

function Input({ maxLength, type, onChange, title, name, value, errorMessage = '' }: InputProps) {
  const [error, setError] = useState(errorMessage);
  const [inputType, setInputType] = useState(type);

  const onBlur = () => {
    if (value === '') {
      setError('Requiered field');

      return;
    }
    const em = validate({ value, type, name });
    setError(em);
  };

  return (
    <div className={style.inputContainer}>
      <div className={style.labelContainer}>
        <label className={style.inputTitle}>{title}</label>
        {(error || errorMessage) && <div className={style.errorText}>{errorMessage || error}</div>}
      </div>
      <div
        className={classNames({
          [style.inputElement]: true,
          [style.errorInput]: error,
        })}
      >
        <input
          maxLength={maxLength}
          onChange={onChange}
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
