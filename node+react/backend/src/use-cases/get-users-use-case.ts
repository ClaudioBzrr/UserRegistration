import { IGetUsersPayload } from '@/entities/Payload';
import { RemoveValues } from '@entities/Validator';
import { UserRepository } from '@repositories/user-repository';

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec({ filter }: IGetUsersPayload) {
    try {
      const users = filter
        ? await this.userRepository.findMany(filter)
        : await this.userRepository.findMany();
      return RemoveValues(users, ['password']);
    } catch (err) {
      throw new Error(`Erro ao consultar usuários : ${String(err)}`);
    }
  }
}
