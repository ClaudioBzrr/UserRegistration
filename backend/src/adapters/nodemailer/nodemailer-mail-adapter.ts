import { MailAdapter, MailAdapterProps } from "../mail-adapter";
import nodemailer from 'nodemailer'
import 'dotenv/config'

const transporter =  nodemailer.createTransport({
    service:String(process.env.EMAIL_SERVICE),
    host:String(process.env.EMAIL_HOST),
    port:Number(process.env.EMAIL_PORT),
    auth:{
        user:String(process.env.EMAIL_USER),
        pass:String(process.env.EMAIL_PASSWORD)
    }
})

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({body,recipient,subject}: MailAdapterProps):Promise<void>{
        try{
            await transporter.sendMail({
                from:`Cadastro de usuário <${process.env.EMAIL_USER}>`,
                to:recipient,
                subject,
                html:body
            })
        }catch(err){
            throw new Error(String(err))
        }
    }
}