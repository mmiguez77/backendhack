import React from 'react'
import { Link } from 'react-router-dom'
import { formBorder, title2, inputForm, form, info, datos, btnContinuar, circulo } from '../Emprendedor.module.scss'
import lamparita from "../../assets/lampara.png"

const Registro2 = () => {
    return (
        <div>
            <div className={formBorder}>
            <div className={circulo}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </div>
                <div>
                    <h1 className={title2}>_formulario de registro del reto</h1>
                </div>
                <div>
                    <h2 className={datos}>paso 2: datos del emprendimeinto</h2>
                </div>
                <div className="col-6 p-0 d-flex">
                    <form className={form}>
                        <label className={info} for="string">nombre del emprendimiento (opcional)</label>
                        <br />
                        <input className={inputForm} type="string" placeholder="Emprendimiento" />
                        <label className={info} for="string">descripción del emprendimiento (opcional)</label>
                        <br />
                        <input className={inputForm} type="string" placeholder="Descripción" />
                        <br />
                        <label className={info} for="submit">a continuación, carga el logo de la empresa o emprendimiento</label>
                        <br />
                        <input type="file" />
                        <br />
                        <label className={info} for="string">enlace a un breve video sobre el emprendimiento (opcional)</label>
                        <br />
                        <input className={inputForm} type="string" placeholder="Emprendimiento" />
                        <br />
                        <input type="file" />

                    </form>
                    <img src={lamparita} alt="icono"/>

                </div>
                <Link to={`/Registro3`}><button className={btnContinuar}>continuar</button></Link>

            </div>
        </div>
    )
}

export default Registro2
