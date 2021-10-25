import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/login.css'
import {api} from '../service/api'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { useToast } from '@chakra-ui/toast'


// interface ResponseData{
//     name:string;
//     id:string;
// }

export function Login(){
    const history =  useHistory()
    const toast =  useToast();
    const [email,setEmail] =  useState('')
    const [password,setPassword] =  useState('')



    async function  handleLogin(event:any){
        event.preventDefault()

         
        try{
            const form_data = {email,password}
            await api.post<any>('login',form_data).then(response =>{
                localStorage.setItem('userName',response.data)
                console.log(response.data)
            })

            history.push('/home')

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



    return(
        <div className="login-container">
            <form className="form-container" onSubmit={handleLogin}>
                <Input className="input-email" name="Email" title="email" onChange={e => setEmail(e.target.value)} value={email}/>
                <Input className="input-password" name="Senha" type="password" title="password"onChange={e => setPassword(e.target.value)} value={password}/>
                <Button title="Entrar" type="submit" />
            </form>
        </div>
    )
}