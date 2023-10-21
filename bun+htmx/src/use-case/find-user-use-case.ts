import { IFilterUserPayload } from "../entities/User";
import { IUserRepository } from "../repositories/user-repository";

export class FindUserUseCase{
    constructor(private userRepository:IUserRepository){}
    async exec(filter:IFilterUserPayload){
        const user =  await this.userRepository.findOne(filter)
        return user
    }
}