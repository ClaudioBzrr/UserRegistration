import { Elysia } from "elysia";
import { routes } from "./routes";

const server = new Elysia()
server.use(routes)


server.listen(3000, () => console.log('Elysia server running on port 3000'))
