import React from 'react'
import './catalogo.css';
import perro1 from '../../assets/perros/catalogo_card-1.png'
import perro2 from '../../assets/perros/catalogo_card-2.png'
import perro3 from '../../assets/perros/cataologo_card-3.png'


const Catalogo = () => {
  return (
    <div className='perros__catalogo section__padding' id='catalogo'>
      <div className="perros__catalogo_container">
        <h1>Conoce a nuestros perros</h1>
        <div className="perros__catalogo_container-cards_container">
          <div className="card" id='perro1'>
            <img src={perro1} alt="Primer perro" />
            <h2>Mika</h2>
            <p>Border Collie</p>
            <button>adoptar</button>
          </div>
          <div className="card" id="perro2">
          <img src={perro2} alt="Primer perro" />
            <h2>Apollo</h2>
            <p>Dalmata</p>
            <button>adoptar</button>
          </div>
          <div className="card" id="perro3">
          <img src={perro3} alt="Primer perro" />
            <h2>Michelle</h2>
            <p>Dachshund</p>
            <button>adoptar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo