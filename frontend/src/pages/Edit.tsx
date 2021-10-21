import React from 'react'
import { Header } from '../components/Header'
import { EditInPlace } from '../components/EditInPlace'



export function Edit(){
    return(
        <div>
            <Header/>
            <div className="form-box">
                <form>
                    <EditInPlace title="nome"editValue="Nome"/>
                </form>
            </div>
        </div>
    )
}