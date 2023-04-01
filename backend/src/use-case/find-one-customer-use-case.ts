import { CustomerReadData, CustomerRepository } from "../repositories/customer-repository";


export class FindOneCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository
    ){}

    async execute(data:CustomerReadData){
        const customer = await this.customerRepository.findOne(data)
        return customer
    }
}