export enum AuthApi {
  LOGIN = '/auth/login',
  REGISTRATION = '/auth/registration/user',
  FORGOT_PASSWORD = '/auth/reset-password',
  GET_USER = '/user',
}
export enum Paths {
  login = 'login',
  signUp = 'sign-up',
  success = 'success',
  forgotPassword = 'forgot-password',
}
export const NavigationPath = {
  SIGN_UP_PAGE: `/auth/${Paths.signUp}`,
  LOGIN_PAGE: `/auth/${Paths.login}`,
  SUCCESS_PAGE: `/auth/${Paths.success}`,
  FORGOT_PASSWORD_PAGE: `/auth/${Paths.forgotPassword}`,
};
export interface AuthFormProps {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword?: string;
}
