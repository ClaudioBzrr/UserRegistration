import React from 'react'
import './../styles/home.css'
import { Header } from '../components/Header'
import {Heading,Divider} from '@chakra-ui/react'


export function Home(){
    return(
        <div className="container">
            <Header/>
            <div className="welcome-container">
                <Heading>Bem vindo(a), Fulano</Heading>
            </div>
            <Divider/>
        </div>
    )
}