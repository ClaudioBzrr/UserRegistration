import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { routes } from './routes'


const port = String(process.env.SERVER_PORT)
const server = express()

server.use(cors())
server.use(express.json({limit:'2mb'}))
server.use(routes)

server.listen(port || process.env.PORT,() =>{
    console.log(`Server listening on port ${port} or ${process.env.PORT} ...`)
})