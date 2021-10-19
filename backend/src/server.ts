import express from "express";
import { routes } from "./routes";
import './database'
import "reflect-metadata"

const port = 3333;
const server =  express();



server.use(express.json())
server.use(routes)



server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})