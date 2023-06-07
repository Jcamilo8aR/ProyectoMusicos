import { consultarConAxios } from "../Services/serivicioCancionesAXIOS"
import { consultarCanciones, getToken } from "../Services/servicioCanciones"
import { useState,useEffect } from "react"
import "./Music.css"

export function Music(){


    const [canciones, setCanciones] = useState(null)
      const [cargando, setCargando] = useState(true)
      const [token, setToken] = useState(null)



      useEffect(function () {
            getToken().then(respuesta => {
                  setToken(respuesta.access_token)
            })
      }, [])


      useEffect(function () {
            if (token) {
                  consultarCanciones(token).then(function (respuesta) {
                        console.log(respuesta);
                        setCanciones(respuesta.tracks);
                        setCargando(false)
                  })
            }

      }, [token]);



    if(cargando){
        return(
            <>
                <h1 className="text-white">Erm...</h1>
            </>
        )
    }else{
        return(
            <>
            
            <div className="containerMusic border">
                <div className="row row-cols-2 row-cols-md-2 g-3 ">
                    {
                        canciones.map(function(cancion){
                            return(
                                <div className="card shadow p-5 bg-black text-white ">
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