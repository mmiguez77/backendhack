import React from 'react'
import {Link} from 'react-router-dom'
import {banner, Azul,Palabra} from '../Components/Login/Login.module.scss'

const CiudadanoLogin = () => {
    return (
        <div>
            <div className={banner}>
                <div>
                    <p className={Palabra}>Para continuar eliga una de las siguientes opciones</p>
                    <Link to={`/Login`}><button className={Azul}>Registrarte</button></Link>
                    <Link to={`/Login2`}><button className={Azul}>Iniciar Sesión</button></Link>
                </div>
                <button className={Azul}>Iniciar sin cuenta</button>
            </div>
        </div>
    )
}

export default CiudadanoLogin;
