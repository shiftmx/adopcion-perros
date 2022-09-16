import React from 'react'
import './contacto.css';

const Contacto = () => {
  return (
    <div className="perros__contacto section__padding" id='contacto'>
      <div className="perros__contacto_container">
        <h1>CONTACTO</h1>
        <h3>PONTE EN CONTACTO CON NOSOTROS</h3>
        <form action="submit">
          <input placeholder='Nombre' type="text" />
          <input placeholder='Telefono' type="text" />
          <input placeholder='Correo' type="text" />
          <input id='footer-mensaje' placeholder='Mensaje' type="text" />

          <input id='footer-submit' type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}

export default Contacto