import React from 'react'
import { Link } from 'react-router-dom'
import { containerBienvenida, registrarRetoBlanco, registrarRetoAzul, containerImagen} from './Bienvenida.module.scss'

export const Bienvenida = () => {
    return (
        <div>
            <nav>
                <img src="" alt=""/>
            </nav>
            <div className={containerImagen}>
                <section className={containerBienvenida}>
                <h2>_bienvenidx, NOMBRE PERSONA X</h2>
                <h3>¡ya eres parte de la hold-up!</h3>
                <p>es el momento de colaborar con cientos de ciudadanxs con brillantes ideas para soucionar el mayor reto de tu emprendimiento y generar impacto juntxs.
                <br/>
                <br/>    
                ¿estás listo para comenzar?</p>
               <Link to={`RegistroReto1`}> <button class={ registrarRetoAzul }>registrar reto</button></Link>
               <Link to={`/Foro`}><button class={registrarRetoBlanco }>registrar más tarde</button></Link>
            </section>
            </div>
            {/* <!-- FOOTER --> */}
        </div>
    )
}
