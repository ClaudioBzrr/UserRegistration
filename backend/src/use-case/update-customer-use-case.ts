import { CustomerRepository } from "../repositories/customer-repository";
import { EncryptRepository } from "../repositories/encrypt-repository";

interface UpdateCustomerUseCaseProps{
    name?:string,
    email?:string,
    password?:string
}

export class UpdateCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository,
        private encryptRepository:EncryptRepository
    ){}
    async execute(id:string,{email,name,password}:UpdateCustomerUseCaseProps){
        await this.customerRepository.update({id},{
            email,
            name,
            password : password && await this.encryptRepository.hash(password)
        })
    }
}