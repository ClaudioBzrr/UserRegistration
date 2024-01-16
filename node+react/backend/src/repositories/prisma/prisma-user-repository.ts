import { IAutogen } from '@entities/system/Autogen';
import { IUser } from '@entities/User';
import { prisma } from '@/prisma';
import { UserRepository } from '../user-repository';

export class PrismaUserRepository implements UserRepository {
  async create(data: Omit<IUser, keyof IAutogen>): Promise<IUser> {
    try {
      const user = await prisma.user.create({ data });
      return user;
    } catch (err) {
      throw new Error(`Erro ao criar usuário : ${String(err)}`);
    }
  }
  async findOne(filter: Partial<IUser>): Promise<IUser> {
    try {
      const user = await prisma.user.findFirstOrThrow({ where: filter });
      return user;
    } catch (err) {
      throw new Error(`Erro ao consultar usuário : ${String(err)}`);
    }
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
