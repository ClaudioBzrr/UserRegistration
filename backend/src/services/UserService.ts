import { getCustomRepository } from "typeorm";
import { UserRepo } from "./../repositories/UserRepo";


interface UserCreate{
    email:string;
    password:string;
    name:string;
}


interface UserLogin{

    email:string;
    password:string;
}

interface UserDelete{
    id:string
}

class UserService{
    private userRepo =  getCustomRepository(UserRepo);

    async create({email,password,name}:UserCreate){
        const user = this.userRepo.create({email,password,name})

        await this.userRepo.save(user)

        return user;
    }


    async login({email,password}:UserLogin){
        
        const user = await this.userRepo.createQueryBuilder('users')
        .select('users.name')
        .where('users.email =:email',{email})
        .andWhere('users.password =:password',{password}).getOne()



        if(!user){
            return  new Error('Usuário não permitido');
        }else{
            return user.name
        }


    }

    async edit({id,name,email,password}){

        const search =  await this.userRepo.findOne({id})

        if(search){
            await this.userRepo.update({
                id:id
            },{
                name:name,
                email:email,
                password:password
            })
        }
        
        return search

    }
    async list(){

        const data =  await this.userRepo.find({
            select:['id','name', 'email','created_at']
        });
        
        return data;

    }


    async delete({id}:UserDelete){

        const del =  await this.userRepo.delete({id:id});
        return del;

    }
}  


export {UserService}