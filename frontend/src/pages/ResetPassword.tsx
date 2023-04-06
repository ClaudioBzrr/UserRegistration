import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

export function ResetPassword(){
    const navigate =  useNavigate()

    function handleGoBack(){
        navigate(-1)
    }
    return(
        <Flex
            align={'center'}
            justify={'center'}
            minH={'100vh'}
            bg={'gray.200'}
        >
            <Stack spacing={8} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Stack direction={'row'} justify={'space-between'} align={'center'} w={'100%'}>
                        <IconButton
                            bg={'gray.200'}
                            onClick={handleGoBack}
                            fontSize={32} 
                            aria-label="voltar" 
                            icon={<ArrowBackIcon/>}
                        />
                        <Heading fontSize={'3xl'} textAlign={'center'} w={'100%'} pr={'40px'}>
                            Redefina sua senha
                        </Heading>
                    </Stack>
                    <Stack>
                        <Text fontSize={'lg'}>Uma nova senha será enviada para o e-mail informado</Text>
                    </Stack>
                </Stack>
                <Box p={8} rounded={'lg'} boxShadow={'lg'} bg={'white'}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel fontSize={'lg'} id="email">E-mail</FormLabel>
                            <Input borderColor={'gray.300'} type="email"/>
                        </FormControl>
                    </Stack>
                    <Stack spacing={10} pt={5} >
                        <Button
                            color={'white'}
                            bg={'blue.500'}
                            _hover={{bg:'blue.400'}}
                        >
                            Redefinir senha
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}