import { IUser } from './User';
import { IAutogen } from './system/Autogen';

export type ICreateUserPayload = {
  data: Omit<IUser, keyof IAutogen>;
};

export type IGetUserPayload = {
  filter: Partial<Omit<IUser, 'password'>>;
};
export type IGetUsersPayload = {
  filter?: Partial<Omit<IUser, 'password'>>;
};

export type IUpdateUserPayload = {
  filter: Partial<IUser>;
  data: Partial<Omit<IUser, keyof IAutogen>>;
};

export type IDeleteUserPayload = {
  filter: Partial<IUser>;
};
