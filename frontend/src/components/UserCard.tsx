import React from "react";
import '../styles/usercard.css'


interface IUserCard{
    name:string;
    email:string;
    created_at:string;

}

export function UserCard({name,email,created_at}:IUserCard){
    return(
        <div className="box">
            <div className="user-list">

                <ul className="user-items">
                    <li className="user-item">Nome :</li>
                    <li className="user-item">Email :</li>
                    <li className="user-item">Data de criação :</li>
                </ul>
                <ul className="user-data">
                    <li className="user-info">{name}</li>
                    <li className="user-info">{email}</li>
                    <li className="user-info">{created_at}</li>
                </ul>

            </div>
        </div>
    )
}