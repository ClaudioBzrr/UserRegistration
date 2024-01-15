import { ICreateUserPayload } from '@entities/Payload';
import { IUserType } from '@entities/User';
import { PasswordRepository } from '@repositories/password-repository';
import { UserRepository } from '@repositories/user-repository';

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRespository: PasswordRepository,
  ) {}
  async exec({ data }: ICreateUserPayload) {
    const hashedPassword = await this.passwordRespository.hash({
      text: data.password,
    });
    data.password = hashedPassword;
    if (Object.values(IUserType).includes(data.type as IUserType) === false) {
      throw new Error('Tipo de usuário inválido');
    }

    const { id, name } = await this.userRepository.create(data);
    return { id, name };
  }
}
