import React from 'react';
import '../css/Footer.css'

function Footer() {
    return (

        <footer>
            <div className='contenedorPie'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-4'>
                        <div className='pie'>
                            <div className='politicaPrivacidad'>
                                <a href='oliticaPrivacidad'>Politica Privacidad</a>
                            </div>

                            <div className='dirección'>
                                <p>Dirección</p>
                                <ul>

                                    <li>C/Rue del Percebe nº65 BajoC<br></br>
                                        28903-Aldea del Fresno</li>
                                    <li>tlfn:666 333 444</li>
                                    <li>TomJerryAbogados@abogados.com</li>
                                </ul>

                            </div>

                            <div className='contacto'>
                                <a href='Contacto.js'>Contacto</a>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;