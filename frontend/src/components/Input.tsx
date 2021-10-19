import React from "react";
import '../styles/input.css'
import {InputHTMLAttributes} from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
}


export function Input({name,...rest}:IInput){
    return(
        <div className="form">
            <input name="name" autoComplete="off" required {...rest}/>
            <label htmlFor="name" className="label-name">
                <span className="content-name">{name}</span>
            </label>
        </div>
    )
}