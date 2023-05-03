import "./Fans.css"

export function Fans(){
    return(
        <>
            <section className="container">
                <section>

                    <div className="col-12 text-center text-white mt-5">
                        <h3>Registrate</h3>
                    </div>

                    <form class="row g-3 text-white mt-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="inputNombre"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Fecha Nacimiento</label>
                            <input type="date" class="form-control" id="inputPassword4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Correo</label>
                            <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="inputPassword" not null/>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck" aria-required>
                                Acepto los terminos y condiciones
                            </label>
                        </div>
                        <div class="col-12 mb-5">
                            <button type="submit" class="btn btn-primary">Registrar</button>
                        </div>
                    </form>   
                </section>
            </section>


            <section className="container">
                <section>
                    <div className="col-12 text-center text-white mt-4 mb-3">
                        <h3>Responde estas 5 preguntas y descubre que integrante eres!</h3>
                    </div>

                    <form class="row g-3 text-white mt-3 mb-5  px-5 ">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label fs-3  w-100">Pregunta 1</label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 1
                            </label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                    Opcion 2
                            </label>
                        </div>


                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label fs-3  w-100">Pregunta 2</label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 1
                            </label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 2
                            </label>
                        </div>


                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label fs-3  w-100">Pregunta 3</label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 1
                            </label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 2
                            </label>
                        </div>


                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label fs-3  w-100">Pregunta 4</label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 1
                            </label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 2
                            </label>
                        </div>


                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label fs-3  w-100">Pregunta 5</label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 1
                            </label>
                        </div>
                        <div class="col-md-3 form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                    Opcion 2
                            </label>
                        </div>
                        
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-primary">Enviar Respuestas</button>
                        </div>
                    </form>   
                </section>

                
            </section>        
        </>
    )
}



















// fORMULARIO PARA REGISTRARSE
// NOMBRE, FECHA NACIMIENTO, CORREO, PASSWORD
// TEST - 5 PREGUNTAS CON SELECCION MULTIPLE


{/* <div className="row row-col-1 row-cols-md-3 g-3 m-4">

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
} */}