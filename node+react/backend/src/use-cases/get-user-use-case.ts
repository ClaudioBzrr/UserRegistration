import { IGetUserPayload } from '@/entities/Payload';
import { RemoveValues } from '@/entities/Validator';
import { UserRepository } from '@repositories/user-repository';

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec({ filter }: IGetUserPayload) {
    try {
      const users = await this.userRepository.findOne(filter);
      return RemoveValues(users, ['password']);
    } catch (err) {
      throw new Error(`Erro ao consultar usuário : ${String(err)}`);
    }
  }
}
