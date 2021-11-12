import React from 'react'
import {Link} from 'react-router-dom'
import {banner, Azul,Palabra} from '../Login/Login.module.scss'

const Direccion = () => {
    return (
        <div>
            <div className={banner}>
                <div>
                    <p className={Palabra}>Para continuar eliga una de las siguientes opciones</p>
                    <Link to={`/Registrate`}><button className={Azul}>soy emprendedor</button></Link>
                    <Link to={`/Login2`}><button className={Azul}>soy ciudadano</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Direccion;
