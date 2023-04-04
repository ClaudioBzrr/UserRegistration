import { Login } from "./pages/Login"
import { Users } from "./pages/Users"

interface RouteProps{
    path:string,
    element:JSX.Element
}

export const routes:RouteProps[] =[
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/users',
        element:<Users/>
    }
]