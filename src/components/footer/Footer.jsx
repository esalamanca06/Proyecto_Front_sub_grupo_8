import React from 'react'
import './Footer.css'
import waves from '../../assets/svg/waves.svg'
import logoWhite from '../../assets/images/logoWhite.webp'
import logoBig from '../../assets/images/logoBig.webp'

export const Footer = () => {
  return (
    <>
      {/* WAVE UP */}
      <img src={waves} alt="" />
      {/* FOOTER */}
      <footer>
        <div className='containerInfoFooter'>
          <p className='infoTitleFooter'>Inicio</p>
          <p className='infoDescFooter'>Testimonios</p>
          <p className='infoTitleFooter'>Servicios</p>
          <p className='infoTitleFooter'>Contactos</p>
        </div>
        <div className="containerLogo">
          <a href="#">
            <img src={logoBig} alt=""/>
          </a>
        </div>
        <div className="containerSocialNetwork">
          <a href="https://www.facebook.com/profile.php?id=100083312620190&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/seguridadsocial.afiliacion/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/+573122684578/?text=¡Hola!%20Me%20gustaría%20recibir%20una%20asesoria%20por%20favor,%20gracias!" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </footer>
    </>
  )
}
