import React from 'react';
import {RouteProps,Route,Redirect} from 'react-router-dom'
import {IsAuthenticated} from './Authenticated'
import {useToast} from '@chakra-ui/react'


interface IprivateRoute extends RouteProps{

    component:any
}

export function PrivateRoute({component:Component, ...rest} : IprivateRoute){

    const toast =  useToast()
    return (
        
        <Route
        {...rest}

        render={(routeProps)=>{
            return IsAuthenticated()?(
                <Component {...routeProps} />
            ):(
                toast({
                    title:"Erro",
                    description: 'Usuário não autenticado',
                    position:'top',
                    duration:3000,
                    status:'error',
                    isClosable:true
                }),
                <Redirect to={
                    {
                        pathname:'/'
                    }
                } />
                 
            )
        }}
        
        />
        
    )
}


// interface PrivateRouteProps extends RouteProps {

//     component: any;

// }

// export const PrivateRoute = (props: PrivateRouteProps) => {
//     const { component: Component, ...rest } = props;

//     return (
//         <Route
//             {...rest}
//             render={(routeProps) =>
//                 IsAuthenticate() ? (
//                     <Component {...routeProps} />
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: '/',
//                                 // state: { from: routeProps.location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// };