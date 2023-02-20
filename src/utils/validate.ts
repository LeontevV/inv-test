export const EMAIL_REGEXP =
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,25})$/;
export const PASSWORD_REGEXP =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export const NAME_REGEXP = /^[A-Za-z]{1,10}$/;

export const validateEmail = (email: string): boolean => EMAIL_REGEXP.test(email);

export const validatePassword = (password: string): boolean => PASSWORD_REGEXP.test(password);

export const validateName = (name: string): boolean => NAME_REGEXP.test(name);
