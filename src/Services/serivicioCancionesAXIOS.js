import axios from "axios"

export async function consultarConAxios(){

    // URI= URL + EDNPOINT DEL SERVICIO
    const idArtista="4tZwfgrHOc3mvqYlEYSvVi"
    const URI=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=us`
    const TOKEN="Bearer BQC8MLVrh_omqSt79jeLENbk8MAsIErTJKpBHhsLaFGlVUYU0INzGB4jUGrJ4qXWFael3ZmtWRBtwzlYz3f_OK_WveZEulltgbX_N4-DwLVCVFmssGE"


    // CONSTRUYO LA PETICION
    const PETICION={  // con axios no debemos deifinir el metodo, solo las cabezeras y el body si es necesario
        headers:{
            "Authorization":TOKEN
        }
    }


   
    // ORDENAR MI RESPUESTA
    try{
         // UTILIZAMOS LA PROMESA ENCARGADA DE CONSUMIR EL API
        let respuesta=await axios.get(URI,PETICION)
        let canciones=respuesta.data
        return canciones
    }catch(error){
        throw new Error("Oops fallamos"+error)
    }
}