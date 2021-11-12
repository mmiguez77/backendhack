import React from 'react';
import { contDesafio, bordecito, textreto, contReto, parrafo,registrarRetoAzul,registrarRetoBlanco, title3} from '../Emprendedor.module.scss'
import iconoReto from '../../assets/iconoForoInner.png'
import fotoGrandeReto from '../../assets/fotoTortuga.png'
import iconoRegistroIdeas from '../../assets/iconoCiudadanoIdea.png'
import { Link } from 'react-router-dom'

export const VistaPreviaReto = () => {
    return (
        <div>
            <div className={contDesafio}>
                {/* TODO ESTO SE CARGA DE MANERA DINAMICA */}
                <img src={iconoReto} alt="icono"/>
                <h2>Playa limpia</h2>
                <p className={textreto}>queremos acabar con los residuos plásticos que aparecen en la playa Bahía Tortugas</p>
                <p>este reto fue propuesto el dia PROPS.DATE</p>
                <div className={contReto}>
                    <h4>_nuestro reto</h4>
                    <p>les invitamos a pensar en ideas innovadoras para reutilizar/reciclar el plástico que se rescata de la playa, bucando evitar que vuelva al mar.
                        Y así encontrar nuevas alternativas sustentables a una
                        problematica latente en las playas del país.</p>
                    <img src={fotoGrandeReto} alt="icono" />
                </div>
            </div>
            <div className={bordecito}>
                <div>
                    <div>
                        <h1 className={title3} >Aqui tienes una vista previa de tu reto</h1>
                    </div>
                    <div>
                        <p className={parrafo}>Así aparecerá para que los ciudadanxs puedan apoyarte</p>
                    </div>
                    <div>

                    <Link to={`/RegistroFinal`}><button class={ registrarRetoAzul }>Enviar Reto</button></Link>
                    </div>
                    <div>

                    <Link to={`/RegistroReto1`}><button class={registrarRetoBlanco }>Editar Reto</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
