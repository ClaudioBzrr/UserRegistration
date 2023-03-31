import express from 'express'
import 'dotenv/config'

const server = express()
const port = String(process.env.SERVER_PORT)
server.listen(port || process.env.PORT,() =>{
    console.log(`Server listening on port ${port} or ${process.env.PORT} ...`)
})