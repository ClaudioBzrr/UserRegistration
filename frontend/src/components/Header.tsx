import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, IconButton, Stack, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Header(){

    const {colorMode,toggleColorMode} = useColorMode()

    return(
        <Box bg={useColorModeValue('white','gray.800')} position={"fixed"} top={0}>
            <Flex boxShadow={'lg'} minW={'100vw'} h={16} justify={'flex-end'} align={'center'}>
                <Stack spacing={4} pr={5}>
                    <IconButton onClick={toggleColorMode} aria-label="toggle color mode" icon={colorMode =='light'? <MoonIcon/> : <SunIcon/>}/>
                </Stack>
            </Flex>
        </Box>
    )
}