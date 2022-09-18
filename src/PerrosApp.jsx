import React from 'react';

import { Catalogo, Contacto, Footer, Header, Nosotros } from './containers';
import { BackToTop, Navbar } from './components';
import Breakpoint from './components/breakpoint/Breakpoint';
import './perrosApp.css'

export const PerrosApp = () => {
  return (
    <div className='App' id='home'>
      <Navbar/>
      <Header/>
      <Nosotros/>
      <Catalogo/>
      <Contacto/>
      <Footer/>
      <Breakpoint at="1024px">
        <BackToTop/>
      </Breakpoint>
    </div>
  )
}
