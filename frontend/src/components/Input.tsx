import React from "react";
import '../styles/input.css'
import {InputHTMLAttributes} from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name:string;
    title:string;
}


export function Input({name,title,...rest}:IInput){
    return(
        <div className="form">
            <input name={title} autoComplete="off" required {...rest}/>
            <label htmlFor={title} className="label-name">
                <span className="content-name">{name}</span>
            </label>
        </div>
    )
}