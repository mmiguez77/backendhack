import React from 'react'
import Card from '../Components/Card/Card'
// import {main, banner, word} from './Foro.module.scss'
import { containerComoAyudar, banner, ciudadanosTexto, categoryList, contenedorCategorias, rosa, verde, turquesa,
blanco, amarillo, cardsForo, barraColorRoja, barraColorBlanco, barraColorAmarillo, barraColorVerde, barraColorTurquesa }
from './Foro.module.scss'

const Foro = () => {
return (
<div>
    <div class={banner}>
        <p className={ciudadanosTexto}>_bienvenidx a este espacio de co-creación</p>
        <div className={containerComoAyudar}>
            <h2>¿qué puedo <br /><span>encontrar?</span></h2>
            <p>aquí encontrarás todos los retos de los emprendimentos con los que puedes interactuar para aportar tu
                granito de arena, con el objetivo de ayudar a los emprendedorxs a encontrar la mejor forma de
                resolverlos, a través de la inteligencia colectiva</p>
        </div>
    </div>
    <div className={contenedorCategorias}>
        <ul className={categoryList}>
            <li className={rosa}> <a>comunidad e <br />innovación</a> </li>
            <li className={verde}> <a>tejido social</a> </li>
            <li className={turquesa}> <a>reducción de <br />desigualdades</a> </li>
            <li className={blanco}> <a> acción <br /> climática</a></li>
            <li className={amarillo}> <a>transformación <br /> social </a></li>
        </ul>
    </div>
    <div className={cardsForo}>
        <div className={barraColorAmarillo}></div>
        <Card />
        <Card />
        <Card />
    </div>
    <div className={cardsForo}>
        <div className={barraColorTurquesa}></div>
        <Card />
        <Card />
        <Card />
    </div>
    <div className={cardsForo}>
        <div className={barraColorRoja}></div>
        <Card />
        <Card />
        <Card />
    </div>
    <div className={cardsForo}>
        <div className={barraColorVerde}></div>
        <Card />
        <Card />
        <Card />
    </div>
    <div className={cardsForo}>
        <div className={barraColorBlanco}></div>
        <Card />
        <Card />
        <Card />
    </div>
    {/* <section className={main}>
        <h1 className={word}>
            ¡Estas a un paso de ayudar con tus ideas!
        </h1>
    </section>
    <section className={banner}>
        <h2>
            Aca va algo pero no sé que 😅
        </h2>
    </section>
    <section className="container">
        <h2>
            <b>_Nos gustaria saber</b>
        </h2>
    </section>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div>
                    <input type="text" name="name" value="name" placeholder="Tu nombre" />
                    <input type="text" name="city" value="city" placeholder="Tu ciudad" />
                </div>
            </div>
        </div>
    </div> */}
</div>
)
}

export default Foro