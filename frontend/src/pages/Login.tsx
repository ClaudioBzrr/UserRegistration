import {
    Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Link
} from '@chakra-ui/react'
import { Link as Linker} from 'react-router-dom'

export function Login(){
    return(
        <Flex
            align={'center'}
            justify={'center'}
            minH={'100vh'}
            bg={'gray.200'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6} py={12}>
                <Stack align={'center'}>
                    <Heading textAlign={'center'} mb={8} fontSize={'4xl'}>Login</Heading>
                    <Stack>
                        <Text fontSize={'lg'}>
                            Entre com sua conta para ter acesso ao nosso sistema
                        </Text>
                    </Stack>
                </Stack>
                <Box rounded={'lg'} boxShadow={'lg'} p={8} bg={'gray.50'}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id='email'>Email</FormLabel>
                            <Input type='email'/>
                        </FormControl>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id='password'>Senha</FormLabel>
                            <Input type='password'/>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{base:'column',sm:'row'}}
                                justify={'space-between'}
                                align={'start'}
                            >
                                <Checkbox>Lembrar meu acesso</Checkbox>
                                <Link color={'blue.500'} >
                                    <Linker to='/reset-password'>
                                        Esqueceu sua senha?
                                    </Linker>
                                </Link>
                            </Stack>
                            <Button
                                bg={'blue.500'} 
                                _hover={{
                                    bg:'blue.400'
                                }}
                                color={'white'}
                            >
                                Entrar
                            </Button>
                        </Stack>
                            <Stack align={'center'} fontSize={'sm'}>
                                <Link color={'blue.500'}>
                                    <Linker to='/register'>Não tem uma conta? Crie aqui</Linker>
                                </Link>
                            </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}