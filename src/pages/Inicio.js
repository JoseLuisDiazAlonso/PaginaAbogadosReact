import React from 'react';
import imagen1 from '../media/foto1.jpg';
import imagen2 from '../media/foto2.jpg';
import '../css/Inicio.css';

function Inicio() {
    return (
        <div className='contenedorInicio'>
            <div className='row'>
                <div className='col-xs-12 col-lg-12'>
                    <div className='nosotros'>
                        <h2>¿Quienes Somos?</h2>
                        <div className='imagen1'>
                            <img src={imagen1} alt='ImagenDespacho' height={150}></img>
                        </div>


                        <div className='texto1'>
                            <p>Somos un despacho de Abogados con más de treinta años de experiencia en la defensa de <br></br>
                                de los derechos de los ciudadanos y de la justicia.Actualmente contamos con oficinas<br></br>
                                repartidas a lo largo de todo el territorio Español.</p>
                        </div>


                        <h2>Nuestro Personal</h2>

                        <div className='texto2'>
                            <p>Nuestro personal cuenta con una amplia experiencia en los diferentes campos del derecho
                                Español.<br></br> Juntos formamos el mejor equipo posible, siempre dispuestos a defender sus
                                interes a toda costa y siempre de un modo profesional.
                            </p>
                        </div>

                        <div className='imagen2'>
                            <img src={imagen2} alt='ImagenDespacho2' height={150}></img>
                        </div>





                    </div>
                </div>
            </div>
        </div>




    );
}

export default Inicio;

