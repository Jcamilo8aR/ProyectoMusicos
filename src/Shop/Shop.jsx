import './Shop.css'

export function Shop(){
    let discos=[
        {
            nombre:"Discovery",
            precio:"60.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/AlbumDiscovery.png?alt=media&token=3e463733-8283-4885-b131-970d5d3ad540",
            año:2007,
            id:1
        },
        {
            nombre:"Homework",
            precio:"60.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/AlbumHomework.jpg?alt=media&token=60f9b81e-007a-48b3-8c84-4cddfe088aae",
            año:2007,
            id:2
        },
        {
            nombre:"Human After All",
            precio:"60.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/AlbumHumanAA.jpg?alt=media&token=aa21638b-9edc-4c4e-8b2a-e750829fc587",
            año:2007,
            id:3
        },
        {
            nombre:"Random Access Memories",
            precio:"70.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/AlbumRAM%20.jpg?alt=media&token=301147f8-4ac3-4738-8952-50b455030ac2",
            año:2007,
            id:4
        },
        {
            nombre:"Alive 2007",
            precio:"50.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/AlbumAlive.png?alt=media&token=8b431283-b07d-48d5-8b24-92f6c25a9455",
            año:2007,
            id:5
        }
    ]

    let ropa=[
        {
            nombre:"Gorro de lana negro",
            precio:"25.900",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/TIenda-BlackBeanie.png?alt=media&token=44d03fb0-4649-45e1-913d-178393bb6f90",
            id:1
        },
        {
            nombre:"Buzo Negro",
            precio:"87.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Tienda-BlackHoodie%20.png?alt=media&token=5be4dd73-0ea9-41d5-b112-354d35b335de",
            id:2
        },
        {
            nombre:"Camiseta Negra",
            precio:"45.900",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Tienda-BlackShirt.png?alt=media&token=1873e10f-7abf-41c1-b1ea-517ec1c8269f",
            id:3
        },
        {
            nombre:"Camiseta Blanca",
            precio:"45.900",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Tienda-WhiteShirt.png?alt=media&token=1492127b-4f6b-47a9-bc40-9cc7078c063e",
            id:4
        },
        {
            nombre:"Casco Replica Amarillo",
            precio:"850.000",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Tienda-Helmet.jpg?alt=media&token=d30f12db-7d62-4fbd-8e6c-db68fbff7f3c",
            id:5
        }
    ]

    return(
        <>
            <div className="carousel">
                <div id="carouselExampleIndicators" class="carousel slide carousel-fade my-5" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/CarouselPintura.jpg?alt=media&token=6df6e9f2-67f9-4b2f-b4a2-17e5957e58de" alt="First slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Pintura</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/CarouselRAM%20.png?alt=media&token=0751ebb6-bbfc-4741-8f1b-150efec4fd96" alt="Second slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Disco Random Access Memory</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/CarouselTapete.png?alt=media&token=27b757a3-1b0c-4c8a-a643-05dac0e301d2" alt="Second slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tapete Rojo</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>

            
            <div className="container mb-5">
                <div className='border-bottom mb-4'>
                    <h4 className="text-white fw-light">Discos</h4>
                </div>

                <div className="row row-cols-1 row-cols-md-5 g-3  mb-4">
                    {
                        discos.map(function(disco){
                            return(
                                <div key={disco.id}>
                                    <div className="col">
                                        <div className="card h-100 shadow text-bg-light">
                                            <h3 className="text-center fs-6">{disco.nombre}</h3>
                                            <img src={disco.foto} alt="foto" className="img-fluid w-100 h-100" />
                                            <h4 className="mt-1 text-success text-center fs-5">${disco.precio}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div className="container">
                    <div className='border-bottom mb-4'>
                        <h4 className="text-white fw-light">Ropa</h4>
                    </div>

                    <div className="row row-cols-1 row-cols-md-5 g-3  mb-4">
                        {
                            ropa.map(function(vestimenta){
                                return(
                                    <div key={vestimenta.id}>
                                        <div className="col">
                                            <div className="card h-100 shadow text-bg-light">
                                                <h3 className="text-center fs-6">{vestimenta.nombre}</h3>
                                                <img src={vestimenta.foto} alt="foto" className="img-fluid w-100 h-100" />
                                                <h4 className="mt-1 text-success text-center fs-5">${vestimenta.precio}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
            
        </>
    )
}