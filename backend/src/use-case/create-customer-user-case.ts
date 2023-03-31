import { CustomerRepository } from "../repositories/customer-repository";
import { EncryptRepository } from "../repositories/encrypt-repository";

interface CreateCustomerUseCaseData{
    email:string,
    name:string
}

export class CreateCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository,
        private encryptRepository:EncryptRepository
    ){}

    async execute({email,name}:CreateCustomerUseCaseData){
        const rawPassword = Math.random().toString(36).slice(-8)
        const password =  await this.encryptRepository.hash(rawPassword)
        await this.customerRepository.create({email,name,password})
    }
}