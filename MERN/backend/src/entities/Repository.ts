import { IAutogen } from './Autogen';

export interface IRepository<T> {
  create: (data: Omit<T, keyof IAutogen>) => Promise<T>;
  findOne: (filter: Partial<T>) => Promise<T>;
  findMany: (filter?: Partial<T>) => Promise<T[]>;
  update: (filter: Partial<T>, data: Partial<T>) => Promise<void>;
  delete: (filter: Partial<T>) => Promise<void>;
}
