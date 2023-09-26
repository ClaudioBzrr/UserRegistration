import { IUserType } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

export class FilterUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec() {
    const users = await this.userRepository.findMany({
      type: IUserType.USER,
    });
    return users;
  }
}
