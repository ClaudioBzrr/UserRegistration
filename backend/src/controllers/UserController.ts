import {Request,response,Response} from 'express'
import { UserService } from '../services/UserService'


class UserController{
    
    
    async create(req:Request,res:Response):Promise<Response>{
        const userService = new UserService();

        const {email, password,name} =  req.body

        try{
            const user = await userService.create({email,password,name}).then(user => res.json(user))
        }

        catch(err){
            return res.status(404).json(`Attention : ${err}`)
        }
    }


    async login(req:Request, res:Response):Promise<Response>{

        const userService =  new UserService();


        const {email, password} = req.body

        try{

            const user  =  await userService.login({email, password}).then(user=> res.json(user))
            
        }catch(err){
            return res.status(403).json(`Attention : ${err}`)
        }


    }

    async list(req:Request,res:Response):Promise<Response>{
        const userService = new UserService();


        try{

            await userService.list().then(data => res.json(data))

        }
        catch(err){
            return res.status(404).json(`Attention : ${err}`)
        }
    }

    async edit(req:Request,res:Response):Promise<Response>{
        const userService =  new UserService();
        const {id} =  req.params;
        const {name,email,password} =  req.body;


        try{
            const editUser =  await userService.edit({id,name,email,password})

            return res.json(id)
        }
        catch(err){
            return res.status(404).json(`Attention : ${err}`)
        }
    }

    async delete(req:Request, res:Response):Promise<Response>{
        const userService =  new UserService();
        const {id} = req.params
        try{
            const del = await userService.delete({id})

            return res.json(id);

        }catch(err){
            return res.status(404).json(`Attention : ${err}`)
        }
    }
}


export {UserController}