import { IComparePassword, IPassword } from '../entities/Password';

export interface PasswordRepository {
  hash: (data: IPassword) => Promise<string>;
  compare: (data: IComparePassword) => Promise<boolean>;
}
