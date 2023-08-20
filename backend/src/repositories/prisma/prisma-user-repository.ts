import { IAutogen } from '../../entities/Autogen';
import { IUser } from '../../entities/User';
import { prisma } from '../../prisma';
import { UserRepository } from '../user-repository';

export class PrismaUserRepository implements UserRepository {
  async create(data: Omit<IUser, keyof IAutogen>): Promise<IUser> {
    const user = await prisma.user.create({ data }).catch(() => {
      throw new Error('Erro ao criar usuário');
    });
    return user;
  }
  async findOne(filter: Partial<IUser>): Promise<IUser> {
    const user = await prisma.user.findUniqueOrThrow({ where: filter });
  }
}
