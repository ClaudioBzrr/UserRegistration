import React from "react";
import {useState} from 'react'


interface IEditInPlace{
    editValue:string;
    title:string
}

export function EditInPlace({editValue,title}:IEditInPlace){

    const [editing, setEditing] = useState(false);
    const [value, setValue] =  useState(editValue);

    const edit = () => setEditing(true);

    if(editing){
        return(
            <input type="text" onChange={e=> setValue(e.target.value)} onBlur={() => setEditing(false)} />
        )
    }else{
        return(
            <div className="edit-div" onDoubleClick={edit} >
                <input type="hidden" name={title} value={value}/>
                <div>{value}</div>
            </div>
        )
    }
}