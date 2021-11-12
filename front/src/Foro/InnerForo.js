import React from 'react'
import { bannerInner, contenedorbanner, textreto, contReto, contDesafio, contInfo, contTexto, contBotones, btnComentar } from './Foro.module.scss'
import fotoPerfil from './../assets/fotoPerfil.png';
import iconoReto from './../assets/iconoForoInner.png';
import fotoGrandeReto from "./../assets/fotoTortuga.png";

export const InnerForo = () => {
return (
<>
    <div className={contDesafio}>
        <img src={iconoReto}/>
        <h2>Playa limpia</h2>
        <p className={textreto}>queremos acabar con los residuos plásticos que aparecen en la playa Bahía Tortugas</p>
        <p>este reto fue propuesto el dia PROPS.DATE</p>
        <div className={contReto}>
            <h4>_nuestro reto</h4>
            <p>les invitamos a pensar en ideas innovadoras para reutilizar/reciclar el plástico que se rescata de la playa, bucando evitar que vuelva al mar. 
                Y así encontrar nuevas alternativas sustentables a una
                problematica latente en las playas del país.</p>
            <img alt="icono" src={fotoGrandeReto}/>
        </div>
    </div>
    <section class={bannerInner}>
        <div className={contenedorbanner}>
            <div className={contInfo}>
                <img src={fotoPerfil} alt="icono"/>
                <p>_camila galo</p>
                <p>25-10-2021</p>
            </div>
            <div className={contTexto}>
                <p>colocaría cestos de residuos en la playa, uno de cartón y papel, otro vidrio y plásticos y otro de
                    desechos organicos. Y por otra parte, con los
                    desechos organicos armaría  un compost, para así generar tierra.</p>
                <div className={contBotones}>
                    <button className={btnComentar}><i class="fas fa-comments"></i>comentar</button>
                    <button className="btnContacto">contactar al ciudadano</button>
                    <button className="btnVerMas">ver más</button>
                </div>
            </div>
        </div>
    </section>
</>
)
}