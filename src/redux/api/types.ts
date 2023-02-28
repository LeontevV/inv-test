export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  id: string;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
