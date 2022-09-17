import React from 'react'
import './footer.css';

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='perros__footer'>
      <div className="perros__footer_container">
        <div className="perros__footer_container-info">
          <h4>OTROS MEDIOS</h4>
          <div className="perros__footer_container-info-p">
            <p>perros@org.com</p>
            <p>+52 81 2824 5046</p>
            <p>Fuentes del Valle 321</p>
          </div>
        </div>
        <hr className='horizontal-div-mobile' />
        <div className='vr'></div>
        <div className="perros__footer_container-social">
          <div className='redes'>
            <FaFacebook className='socials'/>
            <FaInstagram className='socials'/>
            <FaTwitter className='socials'/>
          </div>
          <hr className='horizontal-div-desktop' />
          <p className='socials'>©2022 Perros</p>
        </div>
      </div>


    </div>
  )
}

export default Footer