import { Router } from 'express';
import { UserController } from '@controllers/user-controller';

const userController = new UserController();

export const routes = Router();

routes.get('/login', userController.login);
routes.post('/user', userController.create);
routes.get('/users', userController.getMany);
routes.get('/user/:id', userController.getOne);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);
