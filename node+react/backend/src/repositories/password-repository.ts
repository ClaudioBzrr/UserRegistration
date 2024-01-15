import { IPassword } from '@entities/Password';

export interface PasswordRepository {
  hash: (data: Pick<IPassword, 'text'>) => Promise<string>;
  compare: (data: IPassword) => Promise<boolean>;
}
