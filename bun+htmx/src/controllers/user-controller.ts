import { PrismaUserRepository } from "../repositories/prisma/prisma-user-repository";
import { CreateUserUseCase } from "../use-case/create-user-use-case";
import { BunPasswordRepository } from "../repositories/bun/bun-password-repository";
import { IDataUserPayload } from "../entities/User";

const userRepository =  new PrismaUserRepository()
const passwordRepository =  new BunPasswordRepository()

export class UserController{
    async create(){}
}