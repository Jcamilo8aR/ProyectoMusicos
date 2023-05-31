import { consultarConAxios } from "../Services/serivicioCancionesAXIOS"
import { consultarCanciones } from "../Services/servicioCanciones"
import { useState,useEffect } from "react"
import "./Music.css"

export function Music(){


    const [canciones,setCanciones]=useState('')
    const[cargando,setCargando]=useState(true)

    useEffect(function(){

        consultarConAxios().then(function(respuesta){
                setCanciones(respuesta.tracks)
                console.log(respuesta)
                setCargando(false)
        })

    },[])


    if(cargando){
        return(
            <>
                <h1 className="text-white">Erm...</h1>
            </>
        )
    }else{
        return(
            <>
            
            <div className="containerMusic">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    {
                        canciones.map(function(cancion){
                            return(
                                <div className="card shadow mx-5 p-3 bg-black text-white">
                                    <h4 className="fs-5 fw-bold text-center">{cancion.name}</h4>
                                    <p>Fecha de Salida: {cancion.album.release_date}</p>
                                    <p>Popularidad: {cancion.popularity}</p>
                                    <p>Album: {}</p>
                                   <img src={cancion.album.images[0].url} alt="imagen" className="m-2" /> 
                                    <audio className="w-100 mt-3" controls src={cancion.preview_url}></audio>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            


               
    
            </>
        )
    }
       
   
}