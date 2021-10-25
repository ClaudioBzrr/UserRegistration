import React from 'react'
import './../styles/home.css'
import { Header } from '../components/Header'
import {Heading,Divider} from '@chakra-ui/react'


export function Home(){

    const name =  localStorage.getItem('userName')
    return(
        <div className="container">
            <Header/>
            <div className="welcome-container">
                <Heading>Bem vindo(a), {name}</Heading>
            </div>
            <Divider/>
        </div>
    )
}