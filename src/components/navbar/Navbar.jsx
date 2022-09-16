import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import './navbar.css';

const Menu = () => (
  <>
      <a href="#home">Home</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#catalogo">Catalogo</a>
      <a href="#contacto">Contacto</a>
  </>
)


const Navbar = () => {

  const navRef = useRef();
  const btnOpenRef = useRef();
  const btnCloseRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    btnOpenRef.current.classList.toggle("hidden");
    btnOpenRef.current.classList.remove("visible");

  }
  const hideNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    btnOpenRef.current.classList.toggle("visible");
    btnOpenRef.current.classList.remove("hidden");
  }



  return (
    <div className='perros__navbar'>
      <div className="perros__navbar_container">
      <h3>Logo</h3>
        <div className="perros__navbar_container-links">
          <nav ref={navRef}>
            <Menu/>
            <button ref={btnCloseRef} className='nav-btn nav-close-btn' onClick={hideNavbar}>
            <FaTimes/>
            </button>
          </nav>
          <button ref={btnOpenRef} className='nav-btn' onClick={showNavbar}>
            <FaBars/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar