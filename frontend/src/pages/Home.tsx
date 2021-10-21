import React from 'react'
import './../styles/home.css'
import { Header } from '../components/Header'


export function Home(){
    return(
        <div className="container">
            <Header/>
            <div className="welcome-container">
                <h1>Bem vindo(a), Fulano</h1>
            </div>
        </div>
    )
}