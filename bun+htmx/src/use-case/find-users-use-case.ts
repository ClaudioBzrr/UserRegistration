import { IFilterUserPayload } from "../entities/User";
import { IUserRepository } from "../repositories/user-repository";

export class FindUsersUseCase{
    constructor(private userRepository:IUserRepository){}
    async exec(filter?:IFilterUserPayload){
        const users =  filter ? await this.userRepository.findMany(filter) : await this.userRepository.findMany()
        return users
    }
}