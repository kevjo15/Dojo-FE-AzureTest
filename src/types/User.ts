export type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
};

export interface RegisterUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}
