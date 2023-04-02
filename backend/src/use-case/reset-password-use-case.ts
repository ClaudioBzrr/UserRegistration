import { MailAdapter } from "../adapters/mail-adapter";
import { CustomerRepository } from "../repositories/customer-repository";
import { EncryptRepository } from "../repositories/encrypt-repository";


export class ResetPasswordUseCase{
    constructor(
        private customerRepository:CustomerRepository,
        private encryptRespository:EncryptRepository,
        private mailAdapter:MailAdapter
    ){}
    
    async execute(email:string){
        const generatedPassword = Math.random().toString(36).slice(-8)
        const password =  await this.encryptRespository.hash(generatedPassword)
        await this.customerRepository.update({email},{password}).catch(()=>{throw new Error('Erro ao resetar senha : Usuário não encontrado')})

        await this.mailAdapter.sendMail({
            recipient:email,
            subject:'Sua senha foi alterada - Cadastro de usuários',
            body:[
                `<p>Sua senha foi alterada na plataforma de cadastro de clientes</p>`,
                `<b>Nova senha : ${generatedPassword}</b>`
            ].join('\n')
        })
    }
}