import { IUser } from "../../entities/User";
import { IAutogen } from "../../entities/system/Autogen";
import { prisma } from "../../prisma";
import { IUserRepository } from "../user-repository";

export class PrismaUserRepository implements IUserRepository{
    async create(data: Omit<IUser, keyof IAutogen>):Promise<IUser>{
        const user =  await prisma.user.create({data}).catch(() =>{throw new Error('Erro ao criar usuário')})
        return user
    }
    async findOne(filter: Partial<IUser>):Promise<IUser>{
        const user =  await prisma.user.findFirstOrThrow({where:filter}).catch(() =>{throw new Error('Erro ao localizar usuário')})
        return user
    }
    async findMany(filter?: Partial<IUser>):Promise<IUser[]>{
        try{
            const users =  filter? await prisma.user.findMany({where:filter}) : await prisma.user.findMany()
            return users
        }catch(err){
            throw new Error('Erro ao localizar usuários')
        }
    }
    async update(filter: Partial<IUser>, data: Partial<Omit<IUser, keyof IAutogen>>):Promise<void>{
        await prisma.user.updateMany({where:filter,data}).catch(() =>{throw new Error('Erro ao atualizar informações de usuário')})
    }
    async delete(filter: Partial<IUser>):Promise<void>{
        await prisma.user.deleteMany({where:filter}).catch(() => {throw new Error('Erro ao deletar usuário')})
    }
}