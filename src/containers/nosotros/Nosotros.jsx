import React from 'react'
import './nosotros.css';
import { ImageSlider } from '../../components';

const Nosotros = () => {
  return (
    <div className='perros__nosotros section__padding' id='nosotros'>
      <div className="perros__nosotros_container">
        <h1>¿Quiénes Somos?</h1>
        <p>
          Desde 2020, hemos estado trabajando por un futuro mejor para los perros y las personas que los aman. 
          Cuando un perro está en apuros, lo cuidamos. 
          Cuando un perro necesita un hogar, le encontramos una familia amorosa. 
        </p>
        <p>
          Para cada perro, para cada dueño, estamos a su lado en las buenas y en las malas, durante toda su vida.
        </p>
        <p>
          Cambia vidas, haciendo cada día más feliz y completo. Es por eso que creemos que un perro es para toda la vida.
        </p>
        <ImageSlider/>
      </div>
    </div>
  )
}

export default Nosotros