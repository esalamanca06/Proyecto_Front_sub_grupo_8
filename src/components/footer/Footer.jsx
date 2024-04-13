import React from 'react'
import './Footer.css'
import waves from '../../assets/svg/waves.svg'
import logoWhite from '../../assets/images/logoWhite.webp'

export const Footer = () => {
  return (
    <>
      {/* WAVE UP */}
      <img src={waves} alt="" />
      {/* FOOTER */}
      <footer>
        <div className='containerInfoFooter'>
          <p className='infoDescFooter'><a href="#">Inicio</a></p>
          <p className='infoDescFooter'><a href="#testimonials">Testimonios</a></p>
          <p className='infoDescFooter'><a href="#services">Servicios</a></p>
          <p className='infoDescFooter'><a href="">Contactos</a></p>
        </div>
        <div className="containerLogo">
          <a href="#">
            <img src={logoWhite} alt=""/>
          </a>
        </div>
        <div className="containerSocialNetwork">
          <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/+0000000000/" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </footer>
    </>
  )
}
