import React from 'react';
import '../css/Header.css'


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
                            <ul>
                                <li><a href='Inicio.js'>Inicio</a></li>
                                <li><a href='Servicios.js'>Servicios</a></li>
                                <li><a href='Contacto.js'>Contacto</a></li>
                            </ul>

                        </div>
                    </div>


                </div>
            </div>

        </header>

    );

}

export default Header;