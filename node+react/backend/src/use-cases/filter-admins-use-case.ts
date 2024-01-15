import { IUserType } from '@entities/User';
import { UserRepository } from '@repositories/user-repository';

export class FilterAdminsUseCase {
  constructor(private userRepository: UserRepository) {}
  async exec() {
    const admins = await this.userRepository.findMany({
      type: IUserType.ADMIN,
    });
    return admins;
  }
}
