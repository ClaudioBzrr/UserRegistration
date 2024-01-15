import { IUser } from './User';
import { IAutogen } from './system/Autogen';

export type ICreateUserPayload = {
  data: Omit<IUser, keyof IAutogen>;
};

export type IGetUsersPayload = {
  filter: Partial<Omit<IUser, 'password'>>;
};
