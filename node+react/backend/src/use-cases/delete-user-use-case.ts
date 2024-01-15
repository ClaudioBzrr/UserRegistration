import { IDeleteUserPayload } from '@/entities/Payload';
import { UserRepository } from '@repositories/user-repository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async exec({ filter }: IDeleteUserPayload) {
    try {
      await this.userRepository.delete(filter);
    } catch (err) {
      throw new Error(`Erro ao deletar usuário : ${String(err)}`);
    }
  }
}
