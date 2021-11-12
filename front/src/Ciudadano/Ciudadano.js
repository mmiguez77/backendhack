import React from 'react'
import { containerComoAyudar, banner, wrapper, categoryList, contenedorCategorias, contenedorComoAyudar, cardCategoriaReverse, rosa, verde, turquesa, blanco, amarillo, cardCategoria, contenedorCarousel, btnCards } from './Ciudadano.module.scss'
import tortuga from '../assets/fotoTortuga.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from '../Components/Card/Card';
import '../App.css'
import bioplasticos from '../assets/iconoBioplasticos.png'
import economiaIcono from '../assets/economiaIcono.png'
import iconoConsumo from '../assets/consumoResponsableIcono.png'
import iconoCiudadanos from '../assets/iconoCiudadanos.png'

const Ciudadano = () => {
    let transformacion = "#transformacion";
    let comunidad = "#comunidad";
    let tejido = "#tejido";
    let accion = "#accion";
    let reduccion = "#reduccion";

    return (
        <>
            <div class={banner}>
                <div class={wrapper}>
                    <h2> <span></span></h2>
                </div>
                <div className={containerComoAyudar}>
                    <h2>¿cómo <br /><span>participar?</span></h2>
                    <p>1. explora todas lxs categorías de emprendimientos <br />
                        2.escoge el emprendimiento que te gustaría apoyar para resolver su reto y da click <br />
                        3.responde las preguntas y comienza tu colaboración de co-creación</p>
                </div>
            </div >
            <div className={contenedorCategorias}>
                <ul className={categoryList}>
                    <li className={rosa}> <a href={comunidad}>comunidad e <br />innovación</a></li>
                    <li className={verde}><a href={tejido}>tejido social</a></li>
                    <li className={turquesa}><a href={reduccion}>reducción de <br />desigualdades</a></li>
                    <li className={blanco}><a href={accion}>acción <br /> climática</a></li>
                    <li className={amarillo}> <a href={transformacion}> transformación <br /> social</a></li>
                </ul>
            </div>
            <div className={contenedorComoAyudar}>
                <div>
                    <h3>¿cómo puedo <span>ayudar?</span></h3>
                    <p>como ciudadanx, podré aportar ideas sobré cómo los emprendedores pueden resolver sus retos, apoyándolos desde mi área de conocimiento</p>
                </div>
                <img src={iconoCiudadanos} alt="icono"/>
            </div>
            <div className={cardCategoria}>
                <article>
                    <h3 id="comunidad">_comunidad e innovación</h3>
                    <p>los avances tecnológicos son esenciales para encontrar soluciones a los desafíos económicos y ambientales.
                        Por ello es importante la promoción de industrias sostenibles y la inversión en investigación e innovación científicas.</p>
                </article>
                <div className="contenedorImagenCard">
                    <img src={tortuga} />
                </div>
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
                        <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                </OwlCarousel>
                <button className={btnCards}>ver todos</button>
            </div>
            <div className={cardCategoriaReverse}>
                <article>
                    <h3 id="tejido">_tejido social</h3>
                    <p>contribuir para satisfacer las necesidades humanas elementales, como: alimento,
                        salud, educación, seguridad social, cultura, deporte, servicios públicos, transporte y todo lo que represente a una mejor calidad de vida.</p>
                </article>
                <div className="contenedorImagenCard">
                    <img src={tortuga} alt="icono"/>
                </div>
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
                        <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                </OwlCarousel>
                <button className={btnCards}>ver todos</button>
            </div>
            <div className={cardCategoria}>
                <article>
                    <h3 id="reduccion">_reducción de desigualdades</h3>
                    <p>es necesario adoptar ideas innovadoras que empoderen a las personas de
                        bajos ingresos y promuevan la inclusión económica de todxs, independientemente de su género, raza o etnia.</p>
                </article>
                <div className="contenedorImagenCard">
                    <img src={tortuga} alt="icono"/>
                </div>
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
                        <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                </OwlCarousel>
                <button className={btnCards}>ver todos</button>
            </div>
            <div className={cardCategoriaReverse}>
                <article>
                    <h3 id="accion">_acción climática</h3>
                    <p>las emisiones de gases de efecto invernadero continúan aumentando, y el calentamiento global
                        está provocando cambios cuyas consecuencias pueden ser irreversibles. Necesitamos ideas que permitán que esto no siga empeorando.</p>
                </article>
                <div className="contenedorImagenCard">
                    <img src={tortuga} alt="icono"/>
                </div>
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
                        <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                </OwlCarousel>
                <button className={btnCards}>ver todos</button>
            </div>
            <div className={cardCategoria}>
                <article>
                    <h3 id="transformacion">_transformación social</h3>
                    <p>el objetivo de lograr una educación inclusiva y de calidad para todxs se basa en la
                        firme convicción de que la educación es uno de los motores más poderosos y probados para garantizar el desarrollo sostenible.</p>
                </article>
                <div className="contenedorImagenCard">
                    <img src={tortuga} alt="icono"/>
                </div>
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
                        <Card img={iconoConsumo} title="consumo responsable" description="brindamos un taller de consumo responsable para promover el ahorro de un 80% de energía" boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={bioplasticos} title="todos" description="Buscamos a alguien que nos enseñe como construir viviendas a partir de botellas de vidrio." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                    <div class='item'>
                        <Card img={economiaIcono} title="playa limpia" description="Buscamos ideas para ver como reciclar los residuos que encontramos en la playa." boton="quiero apoyar" />
                    </div>
                </OwlCarousel>
                <button className={btnCards}>ver todos</button>
            </div>
        </>
    )
}

export default Ciudadano
