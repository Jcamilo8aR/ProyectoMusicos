export async function consultarCanciones(){

    // RECETA PARA CONSUMIR APIS CON JS
    
    // 1. A DONDE VOY - URL + ENDPOINT DEL SERVICIO
    const idArtista="4tZwfgrHOc3mvqYlEYSvVi"
    const URL=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=us`
    const TOKEN="Bearer BQA4hG1w9OdA8OuSBwcQXQsjK0eSv70iGd5D_QF15-PXdmVEM2k_eCAz6cAZ71_jQiv4tgb9L1v9AecPv_X3-pfev1klwemS6uS2qEom5x9617s90D4"


    // 2. QUE VOY A HACER 
    // configuro la petricion
    let peticion={
        method:"GET",
        headers:{
            "Autorization":TOKEN
        }
    }


    // 3. CONSUMIR LA API
    // utilice la promesa FETCH para ir al back y consumir la API
    let respuesta=await fetch(URL,peticion) 
    // el codigo no hace nada hasta que termine lo del await
    let canciones=await respuesta.json()

    return canciones

}