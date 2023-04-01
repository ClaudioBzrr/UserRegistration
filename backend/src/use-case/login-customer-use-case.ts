import { CustomerRepository } from "../repositories/customer-repository";
import { EncryptRepository } from "../repositories/encrypt-repository";

interface LoginCustomerUseCaseData{
    email:string,
    password:string
}

export class LoginCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository,
        private encryptRepository:EncryptRepository
    ){}

    async execute(data:LoginCustomerUseCaseData){
        const userData = await this.customerRepository.findOne({email:data.email}).catch(() =>{throw new Error('Usuário não cadastrado')})
        const loginData =  await this.encryptRepository.compare({text:data.password,hashedText:userData.password!}).catch(() =>{throw new Error('Login/Senha inválidos')})
        if(loginData==true){
            return {id:userData.id,name:userData.name}
        }
    }
}
