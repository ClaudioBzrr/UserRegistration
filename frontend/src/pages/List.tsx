import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/list.css'
import {api} from '../service/api'
import { Header } from '../components/Header'
import { UserCard } from '../components/UserCard'
import {useToast} from '@chakra-ui/react'



interface User{
    id:string;
    name:string;
    email:string;
    created_at:string;
}

export function List(){
    const toast = useToast()
    const [users,setUsers] =  useState<User[]>([])



    async function ApiList(){
        try{
            await api.get<[]>('list').then(response =>{
                return setUsers(response.data)
            })
        }catch(err){
            return toast({
                title:"Erro",
                description: `${err}`,
                position:'top-right',
                duration:4000,
                status:'error',
                isClosable:true

            })
        }
    }

    useEffect(()=>{

        ApiList();
        
    })

    return(
        <div className="container" >
            <Header/>
        {
            users.map(user => {
                return <UserCard key={user.id}name={user.name} email={user.email} created_at={user.created_at}/>
            })
        }
        </div>
    )
}