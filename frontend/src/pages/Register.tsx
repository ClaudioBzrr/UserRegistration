import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
    Flex,
    Box,
    Input,
    Button,
    Heading,
    useToast
} from '@chakra-ui/react'
import { api } from '../service/api'




export function Register(){

    const toast = useToast();
    const history =  useHistory();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    async function handleRegister(event:any){
        event.preventDefault();
        const formData = {name,email,password}

        try{
            await api.post<void>('/create',formData).then(response =>{
                return response.data
            })
            history.push('/')
            return toast({
                title:"Sucesso",
                description: `Usuário criado com sucesso`,
                position:'top-right',
                duration:3000,
                status:'success',
                isClosable:true
            })
            
            
        }catch(err){
            return toast({
                title:"Erro",
                description: `Erro ao cadastrar usuário, tente novamente`,
                position:'top-right',
                duration:3000,
                status:'error',
                isClosable:true
            })
        }


    }


    return(
        <Flex w="full" h="100vh" flexDirection="column" alignItems="center" justifyContent="center" >
            <Box >
                <form onSubmit={handleRegister}>
                    <Flex flexDirection="column" alignItems="center" justifyContent="space-around" borderRadius="xl" borderWidth="1px" w="xl" h="md">
                        <Heading textAlign="center">Cadastro</Heading>
                        <Input w="sm" size="md" variant="filled" placeholder="Nome" type="text" onChange={e => setName(e.target.value)} required/>
                        <Input w="sm" size="md" variant="filled" mt="-2em" placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} required/>
                        <Input w="sm" size="md" variant="filled" mt="-2em"placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} required/>
                        <Button w="sm" size="md" mt="-1em" variant="ghost" type="submit">Cadastrar</Button>
                    </Flex>
                </form>
            </Box>
        </Flex>
    )
}