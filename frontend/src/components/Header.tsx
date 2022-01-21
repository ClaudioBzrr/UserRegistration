import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {FiUserPlus as Icon} from 'react-icons/fi'
import './../styles/header.css'





export function Header(){

    const history =  useHistory();

    function handleExit(e:any){
        e.preventDefault()

        localStorage.clear()
        history.push('/')

    }

    return(
        <div className="container" id="container-header">
            <nav>
                <div className="div-logo">
                    <Link to="/home"><Icon className="logo"/></Link>
                </div>
                <ul>
                    <li><Link to="/edit">Editar cadastro</Link></li>
                    <li><Link to="/list">Listar usuários</Link></li>
                   <li>

                       <a href="##" onClick={handleExit}>
                           Sair
                       </a>
                   </li>

                </ul>
            </nav>
        </div>
    )
}

