import React from 'react'
import { Link } from 'react-router-dom'
import {formBorder,form, title2, inputForm, btnContinuar, info, datos, circulo, options} from '../Emprendedor.module.scss'
import Personita from '../../assets/HumaaansSpace.png'


const RegistroEmprendedor = () => {
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
                    <h2 className={datos}>paso 1: datos personales</h2>
                </div>
                <div className="col-6 p-0 d-flex">
                    <form className={form}>
                        <label className={info}  for="name">nombre*</label>
                        <br/>
                        <input className={inputForm} type="string" id="name" required="true" placeholder="Nombre"/>
                        <br/>
                        <label className={info} for="name">apellido*</label>
                        <br/>
                        <input className={inputForm} type="string" id="name" required="true" placeholder="Apellido"/>
                        <br/>
                        <label className={info}  for="name">enlace a página web o redes sociales(opcional)</label>
                        <br/>
                        <input className={inputForm} type="string" id="name" required="true" placeholder="Enlace"/>
                        <br/>
                    </form>
                    <img src={Personita} alt="icono"/>
                </div>
                <Link to ={`/Registro2`}><button className={btnContinuar}>continuar</button></Link>
            </div>
        </div>
    )
}

export default RegistroEmprendedor
