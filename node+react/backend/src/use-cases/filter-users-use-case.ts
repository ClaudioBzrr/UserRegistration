import { IGetUsersPayload } from '@/entities/Payload';
import { RemoveValues } from '@/entities/Validator';
import { UserRepository } from '@repositories/user-repository';

export class FilterUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec({ filter }: IGetUsersPayload) {
    const users = await this.userRepository.findMany(filter);
    return RemoveValues(users, ['password']);
  }
}
