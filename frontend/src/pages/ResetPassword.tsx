import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Text } from "@chakra-ui/react";

export function ResetPassword(){
    return(
        <Flex
            align={'center'}
            justify={'center'}
            minH={'100vh'}
            bg={'gray.200'}
        >
            <Stack spacing={8} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'} >
                    <Heading fontSize={'3xl'} textAlign={'center'}>
                        Redefina sua senha
                    </Heading>
                    <Stack>
                        <Text fontSize={'lg'}>Uma nova senha será enviada para o e-mail informado</Text>
                    </Stack>
                </Stack>
                <Box p={8} rounded={'lg'} boxShadow={'lg'} bg={'white'}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel id="email">E-mail</FormLabel>
                            <Input type="email"/>
                        </FormControl>
                    </Stack>
                    <Stack spacing={8}>
                        <Button
                            bg={'blue.500'}
                            _hover={{bg:'gray.400'}}
                        >
                            Redefinir senha
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}