import React from 'react'
import { Header } from '../components/Header'
import { EditInPlace } from '../components/EditInPlace'
import { api } from '../service/api'
import { useToast,Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'



export function Edit(){
    const toast =  useToast();
    const history = useHistory()
    const Id =  localStorage.getItem('userId')


    // async function returnUser(){
        
    //     await api.post('/user/')

    // }


    async function deleteUser(){
        await api.delete(`/delete/${Id}`).then(response =>{

            return toast({
                title:"Sucesso",
                description: `Usuário deletado com sucesso`,
                position:'top-right',
                duration:3000,
                status:'success',
                isClosable:true
            })


        })
        
        history.push('/')
    }
    return(
        <div>
            <Header/>
            <div className="form-box">

                <Button onClick={() => deleteUser()}>Deletar cadastro</Button>

            </div>
        </div>
    )
}