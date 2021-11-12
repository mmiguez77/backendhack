import React from 'react';
import Card from '../Components/Card/Card'
import OwlCarousel from 'react-owl-carousel'
import { Link } from 'react-router-dom'
import { banner, Cabeza, sub, art, ayuda, contenedorCarousel, olEmprendedores, title, buttonBanner } from './Emprendedor.module.scss'
import rompeCabeza from '../assets/rompeCabeza.png'
import iconoConsumo from '../assets/consumoResponsableIcono.png'
import bioplasticos from '../assets/iconoBioplasticos.png'
import economiaIcono from '../assets/economiaIcono.png'



const Emprendedor = () => {
    return (
        <div>
            <div className={banner}>
                <div className="container">
                    <h1 className={title}> _emprendedorxs</h1>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h2 className={sub}>¿cómo <br />participar? </h2>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center col-4">
                            <ol className={olEmprendedores} start="1">
                                <li className={art}>1. regístrate en la plataforma</li>
                                <li className={art}>2. sigue las intrucciones del hold-up para completar
                                    el formulario necesario para subir tu reto</li>
                                <li className={art}>3. visualiza tu reto en el foro de emprendedores 
                                    empieza a interactuar con las ayudas de múltiples
                                    ciudadanxs</li>
                            </ol>
                            <Link to={`/Registrate`}><button type="button" className={buttonBanner}>quiero participar</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={ayuda}>
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-around align-items-center">
                            <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <h1>¿cómo me pueden <br /> <span>ayudar? </span></h1>
                                    <p>Cómo emprendedxr, podré presentar
                                        los retos de mi proyecto a una gran
                                        comunidad de ciudadanxs activxs que
                                        me apoyarán a encontrar la mejor
                                        solución por medio de ideas creativas.
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className={Cabeza} src={rompeCabeza} alt="img rompe cabeza" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <h1>_algunos de los retos subidos por emprendedores</h1>
                </div>
                <div className={contenedorCarousel}>
                    <OwlCarousel
                        className='owl-theme'
                        autoplay
                        loop
                        margin={10}
                        nav
                        items="3">
                        <div class='item'>
                            <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="ver más" />
                        </div>
                        <div class='item'>
                            <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="ver más" />
                        </div>
                        <div class='item'>
                            <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="ver más" />
                        </div>
                        <div class='item'>
                            <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="ver más" />
                        </div>
                    </OwlCarousel>
                </div>


            </div>
        </div>


    )
}

export default Emprendedor
