import {Router} from 'express'
import { UserController } from './controllers/UserController';



const routes = Router();


const userController =  new UserController();


routes.post("/create",userController.create)
routes.get("/list",userController.list)
routes.delete("/delete/:id",userController.delete)
routes.put("/edit/:id",userController.edit)


export {routes}