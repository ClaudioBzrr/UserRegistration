import { IPassword } from "../entities/Password"

export type IPasswordRepository ={
    hash:(data:Pick<IPassword,'text'>) => Promise<Pick<IPassword,'hash'>>
    compare:(data:IPassword) => Promise<boolean>
}