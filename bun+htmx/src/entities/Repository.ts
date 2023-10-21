import { IAutogen } from "./system/Autogen"

export type IRepository<T> ={
    create:(data:Omit<T,keyof IAutogen>) => Promise<T>
    findOne:(filter:T) => Promise<T>
    findMany:(filter?:T) => Promise<T[]>
    update:(filter:T,data:Omit<T, keyof IAutogen>) => Promise<void>
    delete:(filter:T) => Promise<void>
}