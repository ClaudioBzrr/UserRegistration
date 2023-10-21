import { IFilterUserPayload,IOptionalDataPaylaod } from "../entities/User";
import { IPasswordRepository } from "../repositories/password-repository";
import { IUserRepository } from "../repositories/user-repository";

export class UpdateUserUseCase{
    constructor(private userRepository:IUserRepository, private passwordRepository:IPasswordRepository){}
    async exec(filter:IFilterUserPayload,data:IOptionalDataPaylaod){
        'password' in data ? data.password = await this.passwordRepository.hash({text:data.password!}).then(data => data.hash) : data.password = data.password
        await this.userRepository.update(filter,data)
    }
}