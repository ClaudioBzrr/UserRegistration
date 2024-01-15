import { PickValues } from '@entities/Validator';
import { IUser } from '@entities/User';
import { PasswordRepository } from '@repositories/password-repository';
import { UserRepository } from '@repositories/user-repository';

type IUserLoginData = Pick<IUser, 'email' | 'password'>;

export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRepository: PasswordRepository,
  ) {}
  async exec({ email, password }: IUserLoginData) {
    const user = await this.userRepository.findOne({ email }).catch(() => {
      throw new Error('Usuário não encrontrado');
    });
    const valid = await this.passwordRepository.compare({
      text: password,
      hash: user.password,
    });
    if (!valid) {
      throw new Error('E-mail/senha incorretos');
    }
    return PickValues(user, ['id', 'name', 'email', 'type']);
  }
}
