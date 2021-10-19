import React from 'react'
import '../styles/login.css'
// import { Button } from '../components/Button'
import { Input } from '../components/Input'


export function Login(){
    return(
        <div className="container">
            <Input name="Email"/>
            <Input name="Password" type="password"/>
        </div>
    )
}