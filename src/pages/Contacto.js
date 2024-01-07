import React, { useState } from 'react';
import '../css/Contactos.css';


function Contacto() {

    const [formulario, setFormulario] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        email: '',
        mensaje: ''
    })

    /**La función handleChange es un controlador de eventos que se ejecuta cuando se producen cambios en el formulario. */
    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault(); /**preventDefault evita que el formulario se envie y la página se recargue automáticamente. */

        //Comprobamos que todos los campos han sido rellenados.

        if (formulario.nombre.trim() === '' || formulario.apellidos.trim() === '' || formulario.telefono.trim() === '' || formulario.email.trim() === '' || formulario.mensaje.trim() === '') {
            alert('Todos los campos deben estar cumplimentados');
            return;
        }

        //Validamos el nombre y los apellidos. Solo deben de ser texto.

        const regexTexto = /^[a-zA-Z\u00C0-\u017F\s]+$/; /**regex en expresiones regulares se utiliza para validar los valores ingresados en el campo del formulario. */

        if (!regexTexto.test(formulario.nombre) || !regexTexto.test(formulario.apellidos)) {
            alert('Nombre y Apellidos solo pueden contener texto.');
            return;
        }

        //Validamos que el teléfono solo contenga números.

        const regexNumeros = /^[0-9]+$/;

        if (!regexNumeros.test(formulario.telefono)) {
            alert('El Teléfono solo debe de contener números.');
            return;
        }

        //Validamos el email el cual deberá de tener el formato adecuado.

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(formulario.email)) {
            alert('El email no tiene el formato adecuado');
            return;
        }

        //Si todos los campos están bien cumplimentado se reinicia el formulario y se muestra el mensaje de envío.

        setFormulario({
            nombre: '',
            apellidos: '',
            telefono: '',
            email: '',
            mensaje: ''
        });

        alert('Formulario Enviado');


    }

    const handleEliminar = () => {
        //Limpiamos todos los campos y mostramos el mensaje "Datos Eliminados."

        setFormulario({
            nombre: '',
            apellidos: '',
            telefono: '',
            email: '',
            mensaje: ''
        });
        alert('Datos Eliminados');
    }


    return (
        <div className='contenedor'>
            <div className='row'>
                <div className='col-xs-12 col-lg-6'>
                    <div className='datos'>
                        <h2>Contacta con Nosotros</h2>
                        <p>Si lo prefieres. Rellena los datos y comentanos tu caso. Nos pondremos en contacto contigo de inmediato.</p>
                        <form onSubmit={handleSubmit} id='formulario'>
                            <fieldset>
                                <legend>Comentarios</legend>
                                <label for='nombre'>Nombre:</label>
                                <input type='text' id='nombre' name='nombre' value={formulario.nombre} onChange={handleChange}></input>
                                <label for='apellidos'>Apellidos:</label>
                                <input type='text' id='apellidos' name='apellidos' value={formulario.apellidos} onChange={handleChange}></input>
                                <label for='telefono'>Telefono:</label>
                                <input type='tel' id='telefono' name='telefono' value={formulario.telefono} onChange={handleChange}></input>
                                <label for='email'>Email:</label>
                                <input type='email' id='email' name='email' value={formulario.email} onChange={handleChange}></input>
                                <label for='mensaje'>Información complementaria</label>
                                <textarea id='comentarios' name='mensaje' rows={4} cols={30} value={formulario.mensaje} onChange={handleChange}></textarea>

                            </fieldset>

                            <button type='submit' id='botonEnviar'>Enviar</button>
                            <button type='reset' id='botonEliminar' onClick={handleEliminar}>Eliminar</button>


                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contacto;