export interface EncryptData{
    text:string,
    hashedText:string
}

export interface EncryptRepository{
    hash:(text:string) =>Promise<string>
    compare:(data:EncryptData)=>Promise<boolean>
}