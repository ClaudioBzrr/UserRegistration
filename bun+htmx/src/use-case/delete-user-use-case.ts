import { IFilterUserPayload } from "../entities/User";
import { IUserRepository } from "../repositories/user-repository";

export class DeleteUserUseCase{
    constructor(private userRepository:IUserRepository){}
    async exec(filter:IFilterUserPayload){
        await this.userRepository.delete(filter)
    }
}