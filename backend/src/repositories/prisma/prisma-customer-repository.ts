import { prisma } from "../../prisma";
import { CustomerCreateData, CustomerReadData, CustomerRepository, CustomerUpdateData, CustomerVisibilityData } from "../customer-repository";


export class PrismaCustomerRepository implements CustomerRepository{
    async create(data: CustomerCreateData):Promise<void>{
        try{
            await prisma.customer.create({data}).catch(() => {throw new Error('Erro ao cadastrar usuário')})
        }catch(err){
            throw new Error(String(err))
        }
    }
    async update(filter: CustomerReadData, data: CustomerUpdateData):Promise<void>{
        try{
            await prisma.customer.update({
                where:filter,
                data
            }).catch(() => {throw new Error('Erro ao atualizar usuário')})
        }catch(err){
            throw new Error(String(err))
        }
    }
    async delete(filter: CustomerReadData):Promise<void>{
        try{
            await prisma.customer.delete({where:filter}).catch(() => {throw new Error('Erro ao deletar usuário')})
        }catch(err){
            throw new Error(String(err))
        }
    }
    async findOne(filter: CustomerReadData, visibility?: CustomerVisibilityData):Promise<CustomerReadData>{
        try{
            const data:CustomerReadData =  await prisma.customer.findFirstOrThrow({
                where:filter,
                select:visibility
            }).catch(() =>{throw new Error('Erro ao buscar usuário')})

            return data
        }catch(err){
            throw new Error(String(err))
        }
    }
    async findMany(filter: CustomerReadData, visibility?: CustomerVisibilityData):Promise<CustomerReadData[]>{
        try{
            const data:CustomerReadData[] =  await prisma.customer.findMany({
                where:filter,
                select:visibility
            }).catch(() => {throw new Error('Erro listar usuários')})

            return data
        }catch(err){
            throw new Error(String(err))
        }
    }
}