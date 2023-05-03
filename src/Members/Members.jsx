import './Members.css'

export function Members(){
    return(
        <>
            <section className="banner3">

                <div className="container text-white px-3"> 
                    <div className="row">

                        <div className="col-12 col-md-12 text-center my-3">
                            <h2>MIEMBROS</h2>
                        </div>

                        <div className="col-12 col-md-6 my-5">
                            <h4 className="text-center my-2">Guy-Manuel de Homem-Christo</h4>
                            <p className='mb-3'>
                            Neuilly-sur-Seine, Isla de Francia, 8 de febrero de 1974 <br/> 
                            Rol: DJ y productor
                            </p>
                            <p> De ascendencia portuguesa, y ha señalado que su bisabuelo fue el escritor Homem Christo Filho. En una entrevista en vídeo, declaró que en torno a los 7 años le regalaron una guitarra y un teclado de juguete. Finalmente, a los 14 años le regalaron una guitarra eléctrica. Asimismo, expresó que por lo general utiliza una guitarra para escribir música. </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/guy-manuel-de-homem-christo.jpg?alt=media&token=658386a9-7c12-4cfe-849c-251894f49371" alt="foto" className='img-fluid  w-100 rounded-1' />
                        </div>

                        
                        <div className="col-12 col-md-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Miembro-Thomas.jpg?alt=media&token=698976fb-b261-42c1-aace-5cff0133f095" alt="foto" className='img-fluid w-100 rounded-1' />
                        </div> 

                        <div className="col-12 col-md-6 my-5">
                            <h4 className="text-center my-2">Thomas Bangalter</h4>
                            <p className='mb-3'>
                            París, 3 de enero de 1975<br/> 
                            Rol: DJ, productor, compositor y escritor
                            </p>
                            <p> Empezó a tocar el piano a la edad de seis años. Bangalter dijo en una entrevista que sus padres eran muy estrictos en mantener su práctica, pero que luego les dio las gracias. Su padre, Daniel Vangarde era un compositor famoso y productor de artistas como los Gibson Brothers, Ottawan, Sheila B. Devotion. Según lo expresado por Bangalter, "nunca tuve intención de hacer lo que mi padre estaba haciendo."</p>
                        </div>


                        <h3 className="text-center my-4">¿Como se conocieron?</h3>
                        <div className="col-12 col-md-6">
                            <p className="text-center">
                            Bangalter conoció a Guy-Manuel de Homem-Christo mientras asistía a la escuela Lycée Carnot en 1987. Fue allí donde descubrieron su mutua fascinación por el cine y la música de la década de 1960 y 70, "las cosas muy básicas del culto adolescente, desde Easy Rider hasta The Beatles y The Velvet Underground". En 1992, Ellos y Laurent Brancowitz (quien tiempo después sería el guitarrista de la banda francesa de indie Phoenix) se unieron eventualmente para formar un trío de indie rock llamado Darlin', en el que Bangalter tocaba el bajo. Otro de los proyectos fuera de Daft Punk fue el trío Stardust, en el que integró con Alan Braxe y Benjamin Diamond, conocidos por el sencillo "Music Sounds Better With You" lanzado en 1998, el cual debutó en la segunda posición en el Reino Unido. En 2000 formó parte del dúo Together junto a DJ Falcon, primo de Alan Braxe.
                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <img src="https://firebasestorage.googleapis.com/v0/b/musicosjcor.appspot.com/o/Members.jpg?alt=media&token=c01d10b1-71df-438b-8824-25e1742f80b0" alt="foto" className='img-fluid w-100  mx-auto d-block  rounded-1' />
                        </div> 
                    </div>
                </div>
            </section>
                    
        </>
    )
}