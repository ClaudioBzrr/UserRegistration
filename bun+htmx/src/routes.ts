import { Elysia } from 'elysia'


export const routes = new Elysia()

routes.get('/',() => console.log('Hello World'))