import { IComparePassword, IPassword } from '../../entities/Password';
import { PasswordRepository } from '../password-repository';
import bcrypt from 'bcrypt';

export class BcryptPasswordRepository implements PasswordRepository {
  async hash(data: IPassword): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(data.password, salt);
      return hash;
    } catch (err) {
      throw new Error(`Erro ao gerar senha : ${String(err)}`);
    }
  }
  async compare({ password, hash }: IComparePassword): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    return result;
  }
}
