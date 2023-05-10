import { useState,useEffect } from "react"

export function Hook(){

    // ANTES DEL RETURN CONFIGURAMOS NUESTRAS VARIABLES DE ESTADO
    const [contador,setContador]=useState(0)

    function incrementar(){
        setContador(contador+1)
    }


    // PROGRAMANDO EL DETECTOR DE EJECUCIONES
    useEffect(function(){
        setContador(contador+1)
    },[])



    return(
        <>
        <div className="container text-white">
            <div className="row">
                <di className="col text-center my-5">
                    <button type="button" className="btn btn-primary" onClick={incrementar}>click</button>
                    <h2>La cuenta va en: {contador}</h2>
                </di>
            </div>
        </div>
        
        
        
        </>
    )
}