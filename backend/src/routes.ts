import {Router} from 'express'
import { PrismaCustomerRepository } from './repositories/prisma/prisma-customer-repository'
import { BcryptEncryptRepository } from './repositories/bcrypt/bcrypt-encrypt-repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { FindOneCustomerUseCase } from './use-case/find-one-customer-use-case'
import { FindManyCustomer } from './use-case/find-many-customer-use-case'
import { DeleteCustomerUsecase } from './use-case/delete-customer-use-case'


export const routes =  Router()

const customerRepository =  new PrismaCustomerRepository()
const encryptRepository = new BcryptEncryptRepository()
const mailAdapter =  new NodemailerMailAdapter()

routes.get('/user/:id',async(req,res)=>{
    try{
        const {id} =  req.params
        const findOneCustomerUseCase =  new FindOneCustomerUseCase(customerRepository)
        const data = await findOneCustomerUseCase.execute({id})
        return res.json(data)
    }catch(err){
        return res.json(String(err).replace('Error: ',''))
    }
})

routes.get('/users',async(req,res)=>{
    try{
        const findManyCustomersUseCase =  new FindManyCustomer(
            customerRepository
        )
        const data = await findManyCustomersUseCase.execute({})
        return res.json(data)
    }catch(err){
        return res.json(String(err).replace('Error: ',''))
    }
})

routes.delete('/user/:id',async(req,res)=>{
    try{
        const {id} =  req.params
        const deleteCustomerUseCase =  new DeleteCustomerUsecase(customerRepository)
        await deleteCustomerUseCase.execute({id})
        return res.json('Usuário deletado com sucesso')
    }catch(err){
        throw new Error(String(err).replace('Error: ',''))
    }
})