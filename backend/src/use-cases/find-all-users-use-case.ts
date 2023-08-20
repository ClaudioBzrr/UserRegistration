import { UserRepository } from '../repositories/user-repository';

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec() {
    const users = await this.userRepository.findMany();
    return users;
  }
}
