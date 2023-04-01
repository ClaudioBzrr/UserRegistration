import { CustomerReadData, CustomerRepository } from "../repositories/customer-repository";


export class FindManyCustomer{
    constructor(
        private customerRepository:CustomerRepository
    ){}

    async execute(data:CustomerReadData){
        const userList =  await this.customerRepository.findMany(data)
        return userList
    }
}