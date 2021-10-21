import React from 'react'
import '../styles/list.css'
import { Header } from '../components/Header'
import { UserCard } from '../components/UserCard'


export function List(){
    return(
        <div className="container" >
            <Header/>
            <UserCard name="teste" email="teste@teste" created_at="10/01/2021"/>
            <UserCard name="teste" email="teste@teste" created_at="10/01/2021"/>
            <UserCard name="teste" email="teste@teste" created_at="10/01/2021"/>
        </div>
    )
}