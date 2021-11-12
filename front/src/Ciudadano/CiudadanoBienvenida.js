import React from 'react'
import {containerImagen,containerBienvenida,registrarRetoAzul,registrarRetoBlanco } from '/Ciudadano.module.scss'

const CiudadanoBienvenida = () => {
    return (
        <div>
            <div>
                <nav>
                    <img src="" alt="icono"/>
                </nav>
                <div className={containerImagen}>
                    <section className={containerBienvenida}>
                        <h2>_Gracias, Persona</h2>
                        <h3>¡Tu reto ha sido registrado correctamente!</h3>
                        <p>Ya puede visualizarlo y comenzar a interactuar con los ciudadanxs activxs.
                        <br/>
                        <br/>    
                        </p>
                        <Link to={`/Foro`}><button class={ registrarRetoAzul }>Ir al Foro</button></Link>
                        <Link to={`/Home`}><button class={registrarRetoBlanco }>Volver al inicio</button></Link>
                    </section>
                </div>
            
            </div>
        </div>
    )
}

export default CiudadanoBienvenida
