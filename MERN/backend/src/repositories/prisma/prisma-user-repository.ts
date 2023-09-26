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
    const user = await prisma.user.findFirstOrThrow({ where: filter });
    return user;
  }
  async findMany(filter?: Partial<IUser>): Promise<IUser[]> {
    try {
      const user = filter
        ? await prisma.user.findMany({ where: filter })
        : await prisma.user.findMany();
      return user;
    } catch (err) {
      throw new Error(`Erro ao consultar usuários : ${String(err)}`);
    }
  }
  async update(filter: Partial<IUser>, data: Partial<IUser>): Promise<void> {
    await prisma.user.update({ where: filter, data }).catch(() => {
      throw new Error('Erro ao atualizar usuário');
    });
  }
  async delete(filter: Partial<IUser>): Promise<void> {
    await prisma.user.delete({ where: filter }).catch(() => {
      throw new Error('Erro ao deletar usuário');
    });
  }
}
