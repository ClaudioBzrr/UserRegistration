import { IAutogen } from './system/Autogen';

export interface IRepository<T> {
  create: (data: Omit<T, keyof IAutogen>) => Promise<T>;
  findOne: (filter: Partial<T>) => Promise<T>;
  findMany: (filter?: Partial<T>) => Promise<T[]>;
  update: (
    filter: Partial<T>,
    data: Partial<Omit<T, keyof IAutogen>> & Partial<T>,
  ) => Promise<void>;
  delete: (filter: Partial<T>) => Promise<void>;
}
