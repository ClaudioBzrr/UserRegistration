import { IAutogen } from './Autogen';

export enum IUserType {
  USER = 'user',
  ADMIN = 'admin',
}

export type IUser = IAutogen & {
  email: string;
  type: string;
  name: string;
  password: string;
};
