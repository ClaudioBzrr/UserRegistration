import React from "react";
import {ButtonHTMLAttributes} from 'react'
import './../styles/Button.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string;
}


export function Button({title,...rest}:IButton){
    return(
        <button
            className='effect'
            {...rest}
        >
            {title}
        </button>
    )
}