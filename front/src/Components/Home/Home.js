import React from 'react'
import '../../App.css'
import icono1 from '../../assets/iconoHome.png'
import { itemCarousel } from './Home.module.scss'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'


const Home = () => {
    function login() {

    }

    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="carousel-indicador"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="carousel-indicador"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="contenedor-texto-carousel">
                            <div className={itemCarousel}>
                                <h2 class="d-block carousel-texto">¡bienvenidx <br/> <span> a la<span>hold-up!</span></span></h2>
                                <p>explora la plataforma y ayuda a emprendedorxs a resolver retos de su proyecto a través de la inteligencia colectiva </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className={itemCarousel}>
                            <div className> 
                                <img src={logo}/>
                                <button className="btn-amarillo">visita la web</button>
                            </div>
                            <div>
                                <h5>aprender_ crear_ transformar_</h5>
                                <p class="d-block carousel-texto">es una organización internacional que diseña programas de impacto social y ambiental, impulsando colaboraciones entre ciudadanos comprometidos, emprendedores apasionados y organizaciones vanguardistas.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className={itemCarousel}>
                            <div> 
                                <img src={logo}/>
                                <button className="btn-blanco">visita la web</button>
                            </div>
                            <div>
                                <h5>aprender_ crear_ transformar_</h5>
                                <p class="d-block carousel-texto"> descubre los próximos eventos de impacto coorganizados por makesense, nuestros socixs y la comunidad</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
            <div className="contenedor-holdUp">
                <div>
                    <h2 className=" m165 texto-holdUp">¿qué es la <br /> <b className="p10">hold-up?</b></h2>
                    <h3 className=" m165 texto-parrafo-plataforma">Es una plataforma de co-creación entre ciudadanos y emprendedores para dar solución a un reto específico de un proyecto.</h3>
                </div>
                <img className="imagen-home" src={icono1} />
            </div>
            <div className="container-comoParticipar">
                <h2>_cómo participar</h2>
                <div className="container-cards">
                    <div className="card-home">
                        <h3 className="title-card">_soy ciudadano</h3>
                        <p className="text-card">si soy ciudadano puedo registrarme en
                            la plataforma para dar ideas sobre cómo los
                            emprendedores pueden resolver sus
                            retos, apoyándolos desde mi área de conocimiento.</p>
                        <Link to={`/Ciudadano`}><button className="btn-quieroParticipar green" >quiero participar</button></Link>
                        {/* ESTE BUTTON LLEVA A UN LINK DE VISTA */}
                    </div>
                    <div className="card-home">
                        <h3 className="title-card">_soy emprendedor</h3>
                        <p className="text-card">si soy emprendedor puedo presentar
                            los retos de mi proyecto a una gran
                            comunidad de ciudadanxs activxs que
                            me apoyarán a encontrar la mejor
                            solución por medio de ideas creativas </p>
                        <Link to={`/RegistroReto1`}><button onClick="" className="btn-quieroParticipar blue" >quiero participar</button></Link>
                        {/* ESTE BUTTON LLEVA A UN LINK DE VISTA */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;