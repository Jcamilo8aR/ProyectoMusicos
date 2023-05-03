import { History } from "../History/History"
import { Members } from "../Members/Members"

import './Home.css'

export function Home(){
    return(
        <>
            <section className="banner">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6  text-center">
                            <h1 className="fw-light">Bienvenido  a la mejor web sobre todo lo relacionado a Daft Punk!</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner2">
                <section>
                    <History/>    
                </section>
            </section>
            
            
        </>
    )
}