import React from 'react'
import {Link} from 'react-router-dom'
import {formBorder,title2, inputForm, form, btnCards2, info, categorias, datos, circulo, imgHerramienta, ahoraSi, textArea, contCategoriasReto} from '../Emprendedor.module.scss'
import Herramienta from '../../assets/herramienta.png'

export const Registro3 = () => {
    return (
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
                <h2 className={datos}>paso 3: datos del reto</h2>
            </div>
            <div className="row d-flex">
                <div className="col-6">
                    <form className={form}>
                        <p className={info}>contesta las siguientes preguntas guía para ayudarte a definir cual es tu mayor reto para el que recibirás apoyo (opcional)</p>
                        <label className={info} for="string">1. ¿cúal es el mayor reto que vive hoy tu emprendimiento?</label>
                        <input className={inputForm} type="string" placeholder="Escribilo acá"/>
                        <label className={info} for="string">2. ¿por qué crees que tienes este reto?¿Hay alguna otra ausente?</label>
                        <input className={inputForm} type="string" placeholder="Escribilo acá"/>
                        <label className={info} for="string">3. ¿quien es el usuario que se ve más afectador tu reto? (ejemplo: personas de tu equipo)</label>
                        <input className={inputForm} type="string" placeholder="Escribilo acá"/>
                    </form>
                </div>
                <img src={Herramienta} className={imgHerramienta} alt="Img Herramienta"/>
            </div>
            <div className={ahoraSi}>
                <h4 className={info}>ahora sí, ya estas listo para subir el principal reto que quieres compartir con la <br/> comunidad de ciudadanos para que puedan ayudarte a resolverlo*</h4>
            </div>
            <form className={form}>
                <textarea rows="5" type="string" className={textArea} placeholder="Escribilo acá"/>
            </form>
            <div className={ahoraSi}>
                <h2 className={info}>asigna una categoría a tu reto</h2>
            </div>
            <div className={contCategoriasReto}>
                <button className={categorias}>comunidad e innovación</button>
                <button className={categorias}>tejido social</button>
                <button className={categorias}>reducción de desigualdades</button>
                <button className={categorias}>transformación social</button>
                <button className={categorias}>acción climatica</button>
                <button className={categorias}>otra</button>
            </div>
            <div>
                <Link to={`/VistaPreviarReto`}><button className={btnCards2}>Vista previa del reto</button></Link>
            </div>
        </div>

    )
}
