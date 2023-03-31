import { EncryptData, EncryptRepository } from "../encrypt-repository";
import bcrypt from 'bcrypt'
import 'dotenv/config'

export class BcryptEncryptRepository implements EncryptRepository{
    async hash(text: string):Promise<string>{
        try{
            const saltRounds = Number(process.env.SALT_ROUNDS)
            const salt =  await bcrypt.genSalt(saltRounds)
            const hash = await bcrypt.hash(text,salt)
            return hash
        }catch(err){
            throw new Error(String(err))
        }
    }
    async compare(data: EncryptData):Promise<boolean>{
        try{
            const result = await bcrypt.compare(data.text,data.hashedText)
            return result
        }catch(err){
            throw new Error(String(err))
        }
    }
}