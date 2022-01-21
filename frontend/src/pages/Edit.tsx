import React from 'react'
import { Header } from '../components/Header'
// import { EditInPlace } from '../components/EditInPlace'
import { api } from '../service/api'
import { useToast,Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import '../styles/edit.css'



export function Edit(){


    const toast =  useToast();
    const history = useHistory()
    const userId =  localStorage.getItem('userId')


    // async function returnUser(){
    //     await api.post(`/user/${userId}`)
    // }


    async function deleteUser(){
        await api.delete(`/delete/${userId}`).then(response =>{

            return toast({
                title:"Sucesso",
                description: `Usuário deletado com sucesso`,
                position:'top-right',
                duration:3000,
                status:'success',
                isClosable:true
            })

        })
        localStorage.clear()
        history.push('/')
    }
    return(
        <div className='container-edit'>
            <Header/>
            <div className="form-edit">

                <Button colorScheme='red' className="button-delete" onClick={() => deleteUser()}>Deletar cadastro</Button>

            </div>
        </div>
    )
}   