import React from "react";
import {Link} from 'react-router-dom'
import {FiUserPlus as Icon} from 'react-icons/fi'
import './../styles/header.css'
// import Icon from './../assets/images/register-icon.png'




export function Header(){


    return(
        <div className="container">
            <nav>
                <div className="div-logo">
                    <Link to="/home"><Icon className="logo"/></Link>
                </div>
                <ul>
                    <li><Link to="/edit">Editar cadastro</Link></li>
                    <li><Link to="/list">Listar usuários</Link></li>
                   <li><Link to="/">Sair</Link></li>

                </ul>
            </nav>
        </div>
    )
}

