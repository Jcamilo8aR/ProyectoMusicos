import { useState, useEffect } from "react"

export function Carga(){
    
    const[carga,setCarga]=useState(true)
    const[tiempo,setTiempo]=useState(0)

    useEffect(function(){
        if(tiempo>0){ // FORZAR TIEMPO DE DEMORA PARA TESTEAR
            setCarga(false)
        }else{
            setCarga(true)
        } 
    },[tiempo])

    // SIMULAR CAMBIO DE TIEMPO PARA TESTEAR
    setTimeout(function(){
        setTiempo(1)
    },5000)


    if(carga){
        return(
                <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>CARGANDO...</h3>
                                <img src="../../src/assets/img/alienPls.gif" alt="" className="img-fluid mx-auto d-block"/>
                            </div>
                        </div>
                    </div>
                
                
                </>
                )
    }else{
        return(
            <>
                <h4 className="text-white">asd</h4>
            </>
        )
    }
}