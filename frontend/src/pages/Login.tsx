import React from 'react'
import '../styles/login.css'
import { Button } from '../components/Button'
import { Input } from '../components/Input'


export function Login(){
    return(
        <div className="login-container">
            <form className="form-container">
                <Input className="input-email" name="Email" title="email"/>
                <Input className="input-password" name="Senha" type="password" title="password"/>
                <Button title="Entrar"/>
            </form>
        </div>
    )
}