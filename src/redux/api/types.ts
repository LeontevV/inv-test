export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IGenericResponse {
  status: string;
  message: string;
}
