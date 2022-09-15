import React from 'react';

import { Catalogo, Contacto, Footer, Header, Nosotros } from './containers';
import { Navbar } from './components';

import './perrosApp.css'

export const PerrosApp = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <Nosotros/>
      <Catalogo/>
      <Contacto/>
      <Footer/>
    </div>
  )
}
