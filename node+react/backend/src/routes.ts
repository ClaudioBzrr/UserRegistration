import { Router } from 'express';
import { UserController } from '@controllers/user-controller';

const userController = new UserController();

export const routes = Router();

routes.get('/login', userController.login);
routes.get('/users', userController.getUsers);
routes.get('/user/:id', userController.getUser);
routes.put('/user/:id', userController.updateUser);
