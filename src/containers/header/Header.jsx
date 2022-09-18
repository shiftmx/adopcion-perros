import React from 'react'
import './header.css';

import headerLogo from '../../assets/perros/header-main.png'

const Header = () => {
  return (
    <div className='perros__header section__padding'>
      <div className="perros__header_container-mobile">
        <h1>Donde la adopción de perros es un placer</h1> 
        <img className='header-logo' src={headerLogo} alt="header logo" />
        <a className='btn-catalogo' href='#catalogo'>catalogo</a>
      </div>
      <div className="perros__header_container">
        <div className="perros__header_container-content">
          <h1>Donde la adopción de perros es un placer</h1> 
          <a className='btn-catalogo' href='#catalogo'>catálogo</a>
        </div>
          <img className='header-logo' src={headerLogo} alt="header logo" />
      </div>
    </div>
  )
}

export default Header