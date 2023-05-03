import './Shop.css'

export function Shop(){
    let discos=[
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"asd",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:1
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"Cantante",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:2
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"3",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:3
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"2",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:4
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"2",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:5
        }
    ]

    let ropa=[
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"asd",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:1
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"Cantante",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:2
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"3",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:3
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"2",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
            id:4
        },
        {
            nombre:"Guy-Manuel de Homem-Christo",
            precio:"2",
            foto:"https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DaftPunk2.jpg?alt=media&token=448f5361-45b6-4952-a5ab-f856234f79a2",
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
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/BannerEdit.jpg?alt=media&token=e52d1d07-e1a7-4a63-92fb-760e56720ba6" alt="First slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Banner2.jpg?alt=media&token=cd5214af-e6c2-4e0a-8171-2720334dd77b" alt="Second slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/DPBackground%20Red.png?alt=media&token=4ecf43dc-43c4-4656-accf-ef79f30af466" alt="Third slide" className='img-fluid w-100 d-block ' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
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
                                            <h3 className="text-center fs-5">{disco.nombre}</h3>
                                            <img src={disco.foto} alt="foto" className="img-fluid w-100 h-100" />
                                            <h4 className="mt-1 text-success text-center">${disco.precio}</h4>
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
                                                <h3 className="text-center fs-5">{vestimenta.nombre}</h3>
                                                <img src={vestimenta.foto} alt="foto" className="img-fluid w-100 h-100" />
                                                <h4 className="mt-1 text-success text-center">${vestimenta.precio}</h4>
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