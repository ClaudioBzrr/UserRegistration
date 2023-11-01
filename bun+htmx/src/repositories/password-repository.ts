import { IPassword } from "../entities/Password"

export type IPasswordRepository ={
    hash:(password:IPassword['text']) => Promise<IPassword['hash']>
    compare:(data:IPassword) => Promise<boolean>
}