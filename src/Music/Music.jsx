import { consultarCanciones } from "../Services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music(){


    const [canciones,setCanciones]=useState('')
    const[cargando,setCargando]=useState(true)

    useEffect(function(){

        consultarCanciones().then(function(respuesta){
                setCanciones(respuesta.tracks)
                setCargando=(false)
        })

    },[])


    if(cargando){
        return(
            <>
                <h1>asd</h1>
            </>
        )
    }else{
        return(
            <>
            
                {
                canciones.map(funcition(cancion){
                    return(
                        <audio controls src={cancion.preview_url}></audio>
                    )
                })
                }
    
            </>
        )
    }
       
   
}