import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png'
import "../../App.css"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img src={logo} className="logo" />
                    <ul className="navMenu mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/Home`} className="nav-links">_inicio</Link>
                        </li>
                        <li className='nav-item' aria-current="page">
                            <Link to={`/Emprendedor`} className="nav-links" >_emprendedor</Link>
                        </li>
                        <li className='nav-item' aria-current="page">
                            <Link to={`/Ciudadano`} className="nav-links">_ciudadano</Link>
                        </li>
                        <li className='nav-item' aria-current="page">
                            <Link to={`/Foro`} className="nav-links">_foro</Link>
                        </li>
                        <li className='nav-item' aria-current="page">
                            <Link to={`/Login`} className="nav-links btn-sesion">_iniciar sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
