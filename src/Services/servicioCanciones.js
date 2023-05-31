export async function consultarCanciones(){

    // RECETA PARA CONSUMIR APIS CON JS
    
    // 1. A DONDE VOY - URL + ENDPOINT DEL SERVICIO
    const idArtista="4tZwfgrHOc3mvqYlEYSvVi"
    const URI=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=us`
    const TOKEN="Bearer BQC8MLVrh_omqSt79jeLENbk8MAsIErTJKpBHhsLaFGlVUYU0INzGB4jUGrJ4qXWFael3ZmtWRBtwzlYz3f_OK_WveZEulltgbX_N4-DwLVCVFmssGE"


    // 2. QUE VOY A HACER 
    // configuro la petricion
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        },
    }


    // 3. CONSUMIR LA API
    // utilice la promesa FETCH para ir al back y consumir la API
    let respuesta=await fetch(URI,peticion)
    // el codigo no hace nada hasta que termine lo del await
    
    let canciones=await respuesta.json()

    return canciones

}