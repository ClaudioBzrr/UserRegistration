import React from 'react';
import {RouteProps,Route,Redirect} from 'react-router-dom'
import {IsAuthenticate} from './Authenticate'




interface IprivateRoutes extends RouteProps{

    component:any
}

export function PrivateRoute({component:Component, ...rest} : IprivateRoutes){

 
    return (
        
        <Route
        {...rest}

        render={(routeProps)=>{
            return IsAuthenticate()?(
                <Component {...routeProps} />
            ):(
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