import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";

export function Users(){
    return(
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={"gray.200"}>
            <Header/>
        </Flex>
    )
}