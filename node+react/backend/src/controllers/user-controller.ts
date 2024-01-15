/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetUsersUseCase } from '@/use-cases/get-user-use-case';
import { ICreateUserPayload, IGetUsersPayload } from '@entities/Payload';
import { BcryptPasswordRepository } from '@repositories/bcrypt/bcrypt-password-repository';
import { PrismaUserRepository } from '@repositories/prisma/prisma-user-repository';
import { CreateUserUseCase } from '@use-cases/create-user-use-case';
import { LoginUserUseCase } from '@use-cases/login-user-use-case';
import { Request, Response } from 'express';

const userRepository = new PrismaUserRepository();
const passwordRepository = new BcryptPasswordRepository();
export class UserController {
  async create(request: Request, response: Response) {
    try {
      const payload: ICreateUserPayload = {
        data: request.body,
      };
      const createUseCase = new CreateUserUseCase(
        userRepository,
        passwordRepository,
      );
      const user = createUseCase.exec(payload);
      return response.json(user);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }

  async login(request: Request, response: Response) {
    try {
      const payload = request.body;
      const loginUserUseCase = new LoginUserUseCase(
        userRepository,
        passwordRepository,
      );
      const user = await loginUserUseCase.exec(payload);
      return response.json(user);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }

  async getUsers(request: Request, response: Response) {
    try {
      const payload: IGetUsersPayload = {
        filter: request.body,
      };
      const getUsersUseCase = new GetUsersUseCase(userRepository);
      const users = payload.filter
        ? await getUsersUseCase.exec({ filter: payload.filter })
        : await getUsersUseCase.exec({ filter: {} });
      return response.json(users);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }

  async getUser(request: Request, response: Response) {
    try {
      const payload = request.params.id;
      const getUserUseCase = new GetUsersUseCase(userRepository);
      const user = await getUserUseCase.exec({ filter: { id: payload } });
      return response.json(user);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
