import { IAutogen } from '../entities/Autogen';
import { IUser, IUserType } from '../entities/User';
import { PasswordRepository } from '../repositories/password-repository';
import { UserRepository } from '../repositories/user-repository';

type IUserCreationData = Omit<IUser, keyof IAutogen | 'type'> & {
  type: IUserType;
};

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRespository: PasswordRepository,
  ) {}
  async exec(data: IUserCreationData) {
    const hashedPassword = await this.passwordRespository.hash({
      password: data.password,
    });
    data.password = hashedPassword;

    const { id, name } = await this.userRepository.create(data);
    return { id, name };
  }
}
