import { IAutogen } from "./system/Autogen";

export type IUser = IAutogen &{
    name:string
    email:string,
    password:string
}

export type IDataUserPayload = Omit<IUser,keyof IAutogen>
export type IOptionalDataPaylaod = Partial<IDataUserPayload>
export type IFilterUserPayload = Partial<IUser>