import React from 'react'
import './header.css';

import headerLogo from '../../assets/perros/header-main.png'

const Header = () => {
  return (
    <div className='perros__header section__padding' id='home'>
      <div className="perros__header_container">
        <h1>Donde la adopción de perros es un placer</h1> 
        <img className='header-logo' src={headerLogo} alt="header logo" />
        <a className='btn-catalogo' href='#catalogo'>catalogo</a>
      </div>
    </div>
  )
}

export default Header