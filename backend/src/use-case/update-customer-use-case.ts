import { CustomerRepository } from "../repositories/customer-repository";

interface UpdateCustomerUseCaseProps{
    name?:string,
    email?:string,
    password?:string
}

export class UpdateCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository
    ){}
    async execute(id:string,data:UpdateCustomerUseCaseProps){
        await this.customerRepository.update({id},data)
    }
}