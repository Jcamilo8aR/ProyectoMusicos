export function Members(){

    let integrantes=[
        {
            nombre:"Kendrick Lamar",
            rol:"Cantante",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Damn.jpg?alt=media&token=87df942d-4026-48a2-aedd-6c7a5b72de53",
            nacimiento:"12312",
            id:1
        },
        {
            nombre:"Kendrick Lamar",
            rol:"Cantante",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Damn.jpg?alt=media&token=87df942d-4026-48a2-aedd-6c7a5b72de53",
            nacimiento:"12312",
            id:2
        },
        {
            nombre:"Kendrick Lamar",
            rol:"Cantante",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Damn.jpg?alt=media&token=87df942d-4026-48a2-aedd-6c7a5b72de53",
            nacimiento:"12312",
            id:3
        }
    ]

    return(
        <>
            <div className="row row-col-1 row-cols-md-3 g-3 m-4">

                {
                    integrantes.map(function(integrante){
                        return(
                            <div key={integrante.id}>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h3 className="text-center fw-bold">{integrante.nombre}</h3>
                                        <img className="img-fluid w-100 px-4" src={integrante.foto} alt="" />   
                                        <div className="text-center fw-bold">
                                            <h3>Rol: {integrante.rol}</h3>
                                        </div>
                                        <div className="text-center">
                                            <h3>{integrante.nacimiento}</h3>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}