import { IPassword } from "../../entities/Password";
import { IPasswordRepository } from "../password-repository";

export class BunPasswordRepository implements IPasswordRepository{
    async hash(password: IPassword['text']):Promise<IPassword['hash']>{
        try{
            const hash =  await Bun.password.hash(password)
            return hash
        }catch(err){
            throw new Error(`Error ao criar hash de senha : ${err}`)
        }
    }
    async compare(data: IPassword):Promise<boolean>{
        try{
        const result =  await Bun.password.verify(data.text,data.hash)
        return result
        }catch(err){
            throw new Error(`Erro ao verificar autenticidade de senha : ${err}`)
        }
    }
}