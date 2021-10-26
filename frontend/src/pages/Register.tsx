import React from 'react'
import {
    Flex,
    Box,
    Input,
    Button
} from '@chakra-ui/react'

export function Register(){
    return(
        <Flex w="full" h="100vh" flexDirection="column" alignItems="center" justifyContent="center">
            <Box>
                <form>
                    <Flex flexDirection="column">

                        <Input placeholder="Nome" type="text" required/>
                        <Input placeholder="Email" type="email" required/>
                        <Input placeholder="Senha" type="password" required/>
                        <Button variant="ghost" type="submit">Cadastrar</Button>

                    </Flex>
                </form>
            </Box>
        </Flex>
    )
}