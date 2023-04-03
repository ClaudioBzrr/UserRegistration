import {Router} from 'express'
import {z} from 'zod'
import { PrismaCustomerRepository } from './repositories/prisma/prisma-customer-repository'
import { BcryptEncryptRepository } from './repositories/bcrypt/bcrypt-encrypt-repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { FindOneCustomerUseCase } from './use-case/find-one-customer-use-case'
import { FindManyCustomer } from './use-case/find-many-customer-use-case'
import { DeleteCustomerUsecase } from './use-case/delete-customer-use-case'
import { UpdateCustomerUseCase } from './use-case/update-customer-use-case'
import { LoginCustomerUseCase } from './use-case/login-customer-use-case'
import { ResetPasswordUseCase } from './use-case/reset-password-use-case'


export const routes =  Router()

const customerRepository =  new PrismaCustomerRepository()
const encryptRepository = new BcryptEncryptRepository()
const mailAdapter =  new NodemailerMailAdapter()

routes.get('/customer/:id',async(req,res)=>{
    try{
        const {id} =  req.params
        const findOneCustomerUseCase =  new FindOneCustomerUseCase(customerRepository)
        const data = await findOneCustomerUseCase.execute({id})
        return res.json(data)
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

routes.get('/customers',async(req,res)=>{
    try{
        const findManyCustomersUseCase =  new FindManyCustomer(
            customerRepository
        )
        const data = await findManyCustomersUseCase.execute({})
        return res.json(data)
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

routes.delete('/customer/:id',async(req,res)=>{
    try{
        const {id} =  req.params
        const deleteCustomerUseCase =  new DeleteCustomerUsecase(customerRepository)
        await deleteCustomerUseCase.execute({id})
        return res.json('Usuário deletado com sucesso')
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

routes.put('/customer/:id', async(req,res)=>{
    try{
        const createUserSchema =  z.object({
            name:z.string().optional(),
            email:z.string().email().optional(),
            password:z.string().optional()
        })
        const {id} =  req.params
        const data =  createUserSchema.parse(req.body)
        const updateCustomerUseCase =  new UpdateCustomerUseCase(
            customerRepository,
            encryptRepository
        )
        await updateCustomerUseCase.execute(id,data)
        return res.json('Usuário alterado com sucesso')
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

routes.post('/login', async(req,res) =>{
    try{
        const createUserSchema =  z.object({
            email:z.string().email(),
            password:z.string()
        })
        const data = createUserSchema.parse(req.body)
        const loginUseCase =  new LoginCustomerUseCase(
            customerRepository,
            encryptRepository
        )
        const customer = await loginUseCase.execute(data)
        return res.json(customer)
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

routes.post('/reset-password',async(req,res) =>{
    try{
        const createUserSchema = z.object({
            email:z.string().email()
        })
        const {email} = createUserSchema.parse(req.body)
        const resetPasswordUseCase =  new ResetPasswordUseCase(
            customerRepository,
            encryptRepository,
            mailAdapter
        )
        await resetPasswordUseCase.execute(email)
        return res.json(`Senha resetada com sucesso! A nova senha foi enviada para o e-mail ${email}`)
    }catch(err){
        return res.status(404).json(String(err).replace('Error: ',''))
    }
})

