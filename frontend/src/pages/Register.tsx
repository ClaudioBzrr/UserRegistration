import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Text } from "@chakra-ui/react";
import { Link as Linker } from "react-router-dom";

export function Register(){
    return(
        <Flex bg={'gray.200'} align={'center'} justify={'center'} minH={'100vh'}>
            <Stack spacing={8}  maxW={'lg'} px={6} py={12}>
                <Stack spacing={4}>
                    <Heading  textAlign={'center'} fontSize={'3xl'}>Faça seu Registro</Heading>
                    <Stack justify={'center'} pt={5}>
                        <Text textAlign={'center'} fontSize={'lg'}>Criando a conta você tem acesso ao nosso sistema ✔</Text>
                    </Stack>
                </Stack>
                <Box bg={'white'} rounded={'lg'} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id="name">Nome</FormLabel>
                            <Input borderColor={'gray.400'} type="text"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id="email">Email</FormLabel>
                            <Input borderColor={'gray.400'} type="email"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id="password">Senha</FormLabel>
                            <Input borderColor={'gray.400'} type="password"/>
                        </FormControl>
                        <Stack spacing={6} pt={6}>
                            <Button 
                                color={'white'}
                                bg={'blue.500'}
                                _hover={{bg:'blue.400'}}
                            >Registrar</Button>
                            <Stack align={'center'}>
                                <Text>
                                    Já posui uma conta? <Link  color={'blue.500'}>
                                        <Linker to='/login'>
                                            Faça login
                                        </Linker>
                                    </Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}