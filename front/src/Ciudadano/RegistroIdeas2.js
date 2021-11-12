import React from 'react';
import { contDesafio, contForm, textreto, contReto, btnContinuar, formBorder, title2, inputForm, btnCards, info } from './Ciudadano.module.scss'
import iconoReto from '../assets/iconoForoInner.png'
import fotoGrandeReto from '../assets/fotoTortuga.png'
import iconoRegistroIdeas from '../assets/registro2.png'
import { Link } from 'react-router-dom'

export const RegistroIdeas2 = () => {
    return (
        <div>
            <div className={contDesafio}>
                {/* TODO ESTO SE CARGA DE MANERA DINAMICA */}
                <img src={iconoReto} />
                <h2>Playa limpia</h2>
                <p className={textreto}>queremos acabar con los residuos plásticos que aparecen en la playa Bahía Tortugas</p>
                <p>este reto fue propuesto el dia PROPS.DATE</p>
                <div className={contReto}>
                    <h4>_nuestro reto</h4>
                    <p>les invitamos a pensar en ideas innovadoras para reutilizar/reciclar el plástico que se rescata de la playa, bucando evitar que vuelva al mar.
                        Y así encontrar nuevas alternativas sustentables a una
                        problematica latente en las playas del país.</p>
                    <img src={fotoGrandeReto} />
                </div>
            </div>
            <div className={contForm}>
                <div className={formBorder}>
                    <div>
                        <h1 className={title2}>¡_ayuda a resolver el reto con tus ideas!</h1>
                    </div>
                    <div>
                        <h2>preguntas:</h2>
                        <p>resuelve estas preguntas para ayudar al reto del
                            emprendedor
                            con nuestra metodología de
                            Hold_up:</p>
                    </div>
                    <form>
                        <label className={info} for="name"> 3. ¿si fueras Steve Jobs, ¿qué harias para resolver ese reto? *</label>
                        <br />
                        <input className={inputForm} type="string" id="name" required="true" placeholder="Si fuera Steve Jobs, ..." />
                        <br />
                        <label className={info} for="mail">  4. ¿si no pudieras utilizar internet, ¿qué harias para resolver ese reto? *</label>
                        <br />
                        <input className={inputForm} type="string" id="mail" required="true" placeholder="Si no tuviera internet..." />
                        <br />
                    </form>
                    {/* <Link to={`/RegistroIdeas2`}><button className={btnCards}>Continuar</button></Link> */}
                    <div>
                    </div>
                <Link to ={`/RegistroIdeas3`}><button className={btnContinuar}>Continuar</button></Link>
                </div>
                <img src={iconoRegistroIdeas} />
            </div>
        </div>
    )
}
