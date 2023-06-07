export async function consultarCanciones(token) {

    //RECETA PARA CONSUMIR APIS CON JS

    //1. PARA DONDE VAS ?
    //URL + EP DEL SERVICIO
    const idArtista = "4tZwfgrHOc3mvqYlEYSvVi"
    const URI = `https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=us`
    const TOKEN = `Bearer ${token}`

    //2. QUE VAS A HACER ALLA OME..
    //CONFIGURO LA PETICION
    let peticion = {
          method: "GET",
          headers: {
                "Authorization": TOKEN
          }
    }

    //3. PIDA EL TAXI
    //utilice la promesa FETCH para ir al back y consumir API
    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()
    return canciones
}

export async function getToken(){

    const URI = "https://accounts.spotify.com/api/token"
    
    let options= {
          method: "POST",
          headers:{
                "Content-Type": "application/x-www-form-urlencoded"
          },
          body:"grant_type=client_credentials&client_id=5938fd7d0e5f4d889ba4db749d5780ad&client_secret=63d8eca3cf88416ca881b4f92588b05b"
    }

    let respuesta = await fetch (URI, options)
    let token = await respuesta.json()
    return token
}