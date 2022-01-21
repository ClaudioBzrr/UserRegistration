import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
// import '../styles/login.css'
import {api} from '../service/api'
// import { Button } from '../components/Button'
// import { Input } from '../components/Input'
import { useToast } from '@chakra-ui/toast'

import {
    Input,
    Button,
    Box,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'

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

                localStorage.setItem('userName',response.data.name)
                localStorage.setItem('userId',response.data.id)

                console.log(response.data)
                
            })

            history.push('/home')

        }catch(err){

            setEmail("")
            setPassword("")
            
            return toast({
                title:"Erro",
                description: `Email / senha errados!`,
                position:'top',
                duration:3000,
                status:'error',
                isClosable:true
            })
        }

        
    }  



    return(
        // <div className="login-container">
        <Flex flexDirection="column" alignItems="center" justifyContent="center" w="full" h="100vh">
            <Box> 
                <form onSubmit={handleLogin}>
                    <Flex flexDirection="column" alignItems="center" justifyContent="space-evenly" borderRadius="xl" borderWidth="1px" w="lg" h="sm">
                        <Heading>Login</Heading>
                        <Input w="sm" size="md" variant="filled" className="input-email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
                        <Input w="sm" size="md" variant="filled" className="input-password" placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} value={password} required mt="-2em"/>
                        <Button w="sm" variant="ghost" size="lg" type="submit" >Entrar</Button>
                    </Flex>
                </form>
            </Box>

            <Box mt="1em">
                <Link to="/register">
                    <Text fontSize="xs" color="GrayText">
                        Não tem um cadastro ? cadastre-se aqui
                    </Text>
                </Link>
            </Box>
        </Flex>
        // </div>
    )
}