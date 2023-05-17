export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type IUserWithoutPassword = Omit<IUser, 'password'>;

export type IUserWithoutName = Omit<IUser, 'name'>;

export interface IUserResponse {
  user: IUserWithoutPassword;
  token: string;
}
