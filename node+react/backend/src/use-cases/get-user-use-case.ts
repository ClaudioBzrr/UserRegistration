import { IGetUserPayload } from '@/entities/Payload';
import { RemoveValues } from '@/entities/Validator';
import { UserRepository } from '@repositories/user-repository';

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec({ filter }: IGetUserPayload) {
    const users = await this.userRepository.findOne(filter);
    return RemoveValues(users, ['password']);
  }
}
