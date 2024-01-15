import { IGetUsersPayload } from '@/entities/Payload';
import { RemoveValues } from '@entities/Validator';
import { UserRepository } from '@repositories/user-repository';

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec({ filter }: IGetUsersPayload) {
    const users = filter
      ? await this.userRepository.findMany(filter)
      : await this.userRepository.findMany();
    return RemoveValues(users, ['password']);
  }
}
