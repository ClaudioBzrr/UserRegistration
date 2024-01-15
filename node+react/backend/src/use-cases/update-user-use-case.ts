import { IUpdateUserPayload } from '@/entities/Payload';
import { PasswordRepository } from '@/repositories/password-repository';
import { UserRepository } from '@/repositories/user-repository';

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordRepository: PasswordRepository,
  ) {}

  async exec({ filter, data }: IUpdateUserPayload) {
    try {
      if (data.password) {
        const hashedPassword = await this.passwordRepository.hash({
          text: data.password,
        });
        data.password = hashedPassword;
      }
      await this.userRepository.update(filter, data);
    } catch (err) {
      throw new Error(`Erro ao atualizar usuário : ${String(err)}`);
    }
  }
}
