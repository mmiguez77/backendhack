import React from 'react'
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer>
            <div className="footer-components">
                <div class="footer-element">
                    <h4 className="title-footer">Aviso de privacidad</h4>
                    <p class="texto-footer">Consulta nuestro Aviso de Privacidad</p>
                </div>
                <div class="footer-element">
                    <h4 className="title-footer">Equipo</h4>
                    <p class="texto-footer">Ofertas de empleo</p>
                </div>
                <div class="footer-element">
                    <h4 className="title-footer">Contacto</h4>
                    <p class="texto-footer">makesense en el mundo</p>
                </div>
                <img class=" footer-img" src={logo} alt="" />
            </div>
            <div className="line">
            </div>
            <div className="rrss">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </footer>
    )
}

export default Footer
