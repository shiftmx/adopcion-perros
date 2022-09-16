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
        <hr />
        <div className="perros__footer_container-social">
          <FaFacebook className='socials'/>
          <FaInstagram className='socials'/>
          <FaTwitter className='socials'/>
          <p className='socials'>©2022 Perros</p>
        </div>
      </div>
    </div>
  )
}

export default Footer