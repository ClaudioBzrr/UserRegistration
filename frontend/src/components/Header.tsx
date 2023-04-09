import { Box, Flex, HStack } from "@chakra-ui/react";


export function Header(){
    return(
        <Box bg={'white'} position={"fixed"} top={0}>
            <Flex minW={'100vw'} h={16} justify={'space-between'} align={'center'}>
                <HStack>

                </HStack>
            </Flex>
        </Box>
    )
}