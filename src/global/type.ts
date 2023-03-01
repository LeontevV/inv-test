export enum AuthApi {
  LOGIN = '/auth/login',
  REGISTRATION = '/auth/registration/user',
  FORGOT_PASSWORD = '/auth/reset-password',
  GET_USER = '/user',
}
export enum NavigationPath {
  SIGN_UP_PAGE = '/auth/sign-up',
  LOGIN_PAGE = '/auth/login',
  SUCCESS_PAGE = '/auth/success',
  FORGOT_PASSWORD_PAGE = '/auth/forgot-password',
}
export enum Paths {
  login = 'login',
  signUp = 'sign-up',
  success = 'success',
  forgotPassword = 'forgot-password',
}
export interface AuthFormProps {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  confirmPassword?: string;
}
