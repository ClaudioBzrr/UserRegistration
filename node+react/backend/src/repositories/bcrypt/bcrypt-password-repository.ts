import { IPassword } from '@entities/Password';
import { PasswordRepository } from '../password-repository';
import bcrypt from 'bcrypt';

export class BcryptPasswordRepository implements PasswordRepository {
  async hash({ text }: Pick<IPassword, 'text'>): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(text, salt);
      return hash;
    } catch (err) {
      throw new Error(`Erro ao gerar senha : ${String(err)}`);
    }
  }
  async compare({ text, hash }: IPassword): Promise<boolean> {
    const result = await bcrypt.compare(text, hash);
    return result;
  }
}
