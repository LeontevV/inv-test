export const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,16}))$/;
export const PASSWORD_REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const NAME_REGEXP = /^[A-Z]{1,10}$/;

export const validateEmail = (email: string): boolean => EMAIL_REGEXP.test(email);

export const validatePassword = (password: string): boolean => PASSWORD_REGEXP.test(password);

export const validateName = (name: string): boolean => NAME_REGEXP.test(name);
