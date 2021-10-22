import React from 'react'
import {useState,useEffect} from 'react'
import '../styles/list.css'
import {api} from '../service/api'
import { Header } from '../components/Header'
import { UserCard } from '../components/UserCard'



interface User{
    id:string;
    name:string;
    email:string;
    created_at:string;
}

export function List(){

    const [users,setUsers] =  useState<User[]>([])

    useEffect(()=>{
        api.get<[]>('list').then(response =>{
            return setUsers(response.data)
        })
    },[])

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