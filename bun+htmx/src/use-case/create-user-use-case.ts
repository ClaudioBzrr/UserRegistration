import { IDataUserPayload } from "../entities/User";
import { IPasswordRepository } from "../repositories/password-repository";
import { IUserRepository } from "../repositories/user-repository";


export class CreateUserUseCase{
    constructor(private userRepository:IUserRepository,private passwordRepository:IPasswordRepository){}
    async exec(data:IDataUserPayload){
        data.password =  await this.passwordRepository.hash({text:data.password}).then(password => password.hash)
        const user = await this.userRepository.create(data)
        return {id:user.id,name:user.name}
    }
}