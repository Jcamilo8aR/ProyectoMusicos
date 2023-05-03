export function Footer(){
    return(
        <>
            <footer className="text-center text-lg-start bg-black text-white fw-light">
                <section className="d-flex justify-content-center justify-content-lg-between  border-bottom">

                <div>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                </section>


                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">

                                <h6 className="text-uppercase fw-bold mb-2">
                                    <i className="text-secondary"></i>Daft Punk
                                </h6>
                                <p>
                                Pagina web sobre Daft Punk y relacionados. Enterate de las ultimas noticias y hazte con mercancia oficial!
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">

                                <h6 className="text-uppercase fw-bold mb-2">
                                Nuestras redes
                                </h6>
                                <div>
                                <a className="bi bi-instagram text-decoration-none text-white"></a>
                                    <a className="text-decoration-none text-white mx-2" href="https://instagram.com">Instagram</a>
                                </div>
                                <div>
                                <a className="bi bi-twitter text-decoration-none text-white"></a>
                                    <a className="text-decoration-none text-white mx-2" href="https://twitter.com">Twitter</a>
                                </div>
                                <div>
                                <a className="bi bi-facebook text-decoration-none text-white"></a>
                                    <a className="text-decoration-none text-white mx-2" href="https://facebook.com">Facebook</a>
                                </div>
                            </div>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-4">
                                <h6 className="text-uppercase fw-bold mb-1">Desarrollador</h6>
                                <p>
                                    <a className="bi bi-github text-decoration-none text-white"></a>
                                    <a href="https://github.com/jcamilo8ar" className="text-decoration-none text-white mx-2">Juan Camilo Ochoa</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center pb-3">© 2023 Copyright</div>
            </footer>
        </>
    )
}