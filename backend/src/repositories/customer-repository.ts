export interface CustomerCreateData{
    email:string,
    name:string,
    password:string
}

export interface CustomerUpdateData{
    email?:string,
    name?:string,
    password?:string
}

export interface CustomerReadData{
    id?:string,
    email?:string,
    name?:string
}

export interface CustomerVisibilityData{
    id?:boolean,
    email?:boolean,
    name?:boolean
}


export interface CustomerRepositoryData{
    create:(data:CustomerCreateData) => Promise<void>
    update:(data:CustomerUpdateData) => Promise<void>
    findOne:(filter:CustomerReadData,visibility?:CustomerVisibilityData) => Promise<CustomerReadData>
    findMany:(filter:CustomerReadData,visibility?:CustomerVisibilityData) => Promise<CustomerReadData[]>
    delete:(filter:CustomerReadData) => Promise<void>
}