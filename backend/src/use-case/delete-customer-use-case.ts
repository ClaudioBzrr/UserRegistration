import { CustomerRepository } from "../repositories/customer-repository";

interface DeleteCustomerUseCaseData{
    id:string
}

export class DeleteCustomerUsecase{
    constructor(
        private customerRepository:CustomerRepository
    ){}

    async execute({id}:DeleteCustomerUseCaseData){
        await this.customerRepository.delete({id})
    }
}