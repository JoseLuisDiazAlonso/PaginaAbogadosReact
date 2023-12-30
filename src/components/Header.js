// Header.js
import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className='contenedorCabecera'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-4'>
                        <div className='titulo'>
                            <h1>TOM Y JERRY ABOGADOS</h1>
                        </div>

                        <div className='menu'>
                            <nav>
                                <ul>
                                    <li><Link to='/'>Inicio</Link></li>
                                    <li><Link to='/Servicios'>Servicios</Link></li>
                                    <li><Link to='/Contacto'>Contacto</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;