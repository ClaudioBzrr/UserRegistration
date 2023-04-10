import { EditIcon, MinusIcon, MoonIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, useColorMode,useColorModeValue,Text, Divider } from "@chakra-ui/react";

export function Header(){

    const {colorMode,toggleColorMode} = useColorMode()

    return(
        <Box bg={useColorModeValue('white','gray.800')} position={"fixed"} top={0}>
            <Flex boxShadow={'lg'} minW={'100vw'} h={16} justify={'flex-end'} align={'center'}>
                <Stack direction={'row'} spacing={4} pr={5}>
                    <IconButton onClick={toggleColorMode} aria-label="toggle color mode" icon={colorMode =='light'? <MoonIcon/> : <SunIcon/>}/>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                        >
                            <Avatar
                                size={'sm'}
                                src={'https://api.dicebear.com/6.x/bottts/svg?seed=Bandit'}
                            />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                            <Stack direction={'column'} spacing={5} align={'center'} justify={'center'} p={3}>
                                <Avatar
                                    size={'xl'}
                                    src={'https://api.dicebear.com/6.x/bottts/svg?seed=Bandit'}
                                />
                                <Text>Usuário</Text>
                            </Stack>
                            <Divider/>
                            <MenuItem icon={<EditIcon/>}>
                                Editar perfil
                            </MenuItem>
                            <MenuItem icon={<MinusIcon/>}>
                                Sair
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </Box>
    )
}