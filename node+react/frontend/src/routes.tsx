import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ResetPassword } from "./pages/ResetPassword"
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
        path:'/login',
        element:<Login/>
    },
    {
        path:'/users',
        element:<Users/>
    },
    {
        path:'/reset-password',
        element:<ResetPassword/>
    },
    {
        path:'/register',
        element:<Register/>
    }
]