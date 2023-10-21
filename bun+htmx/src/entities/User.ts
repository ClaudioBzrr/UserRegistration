import { IAutogen } from "./system/Autogen";

export type IUser = IAutogen &{
    name:string
    email:string,
    password:string
}