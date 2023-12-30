import React from 'react';
import laboralImagen from '../media/derechoLaboral.png';
import penalImagen from '../media/penal.jpg';
import civilImagen from '../media/civil.jpg';
import asesoriaImagen from '../media/asesoria.jpeg';
import '../css/Servicios.css';



function Servicios() {
    return (
        <div className='contenedorServicios'>
            <div className='row'>
                <div className='col-xs-12 col-lg-4'>
                    <div className='servicios'>
                        <div className='laboral'>
                            <h2>Laboral</h2>
                            <img src={laboralImagen} alt='laboral' height={100} ></img>
                            <p>Nuestro competente y experimentado personal le asesorará en todas tus consultas laborales.<br></br>
                                Despidos, asesoramiento en contratos laborales, indemnizaciones. Estamos a tu disposición para solucionar<br></br>
                                Cualquier problema.</p>

                        </div>

                        <div className='penal'>
                            <h2>Penal</h2>
                            <img src={penalImagen} alt='penal' height={100} ></img>
                            <p>Y si tienes cualquier problema penal te proporcionamos la mejor defensa posible.<br></br>
                                Todos y cada uno de los miembros de nuestro equipo penal tiene una amplia experiencia y son los
                                mejores profesionales en su campo.</p>
                        </div>

                        <div className='civil'>
                            <h2>Civil</h2>
                            <img src={civilImagen} alt='civil' height={100}></img>
                            <p>Nuestros primeros servicios como bufete de abogados fué la defensa civil.<br></br>
                                Es por ello que en este tema contarás con el mejor asesoramiento y defensa posible.
                                Ante cualquier problema que pueda tener.</p>
                        </div>

                        <div className='asesoria'>
                            <h2>Gestoria</h2>
                            <img src={asesoriaImagen} alt='asesoria' height={100}></img>
                            <p>También disponemos de un personal especializado en asesoramiento y gestión de fincas,<br></br>
                                empresas.¡Ven! y recibe nuestros mejores servicios de gestoria.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Servicios;