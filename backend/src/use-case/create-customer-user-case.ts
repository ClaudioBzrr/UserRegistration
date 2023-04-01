import { MailAdapter } from "../adapters/mail-adapter";
import { CustomerRepository } from "../repositories/customer-repository";
import { EncryptRepository } from "../repositories/encrypt-repository";

interface CreateCustomerUseCaseData{
    email:string,
    name:string
}

export class CreateCustomerUseCase{
    constructor(
        private customerRepository:CustomerRepository,
        private encryptRepository:EncryptRepository,
        private mailAdapter:MailAdapter
    ){}

    async execute({email,name}:CreateCustomerUseCaseData){
        const rawPassword = Math.random().toString(36).slice(-8)
        const password =  await this.encryptRepository.hash(rawPassword)
        await this.customerRepository.create({email,name,password})
        await this.mailAdapter.sendMail({
            recipient:email,
            subject:'New customer registered',
            body:[
                `<p>Hi!</p>`,
                `<p>Below are your platform access credentials</p>`,
                `<p><b>Login : ${email}</b></p>`,
                `<p><b>Password : ${password}</b></p>`
            ].join('\n')
        })
    }
}