import React from 'react'
import './Navbar.css'
import logoBig from '../../assets/images/logoBig.webp'

export const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <input type="checkbox" id="nav-check"/>
          {/* MENU NAVBAR */}
          <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/#services">Servicios</a>
            <a href="/#testimonials">Testimonios</a>
          </div>
          {/* LOGO NAVBAR */}
          <div className="nav-header">
            <img className="logoP" src={logoBig} alt=""/>
          </div>
          {/* REDES NAVBAR */}
          <div className="socialNav">
            <a href="https://www.facebook.com/profile.php?id=100083312620190&mibextid=ZbWKwL" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/seguridadsocial.afiliacion/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/+573122684578/?text=¡Hola!%20Me%20gustaría%20recibir%20una%20asesoria%20por%20favor,%20gracias!" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          {/* BTN NAVBAR HAMBURGUER */}
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
      </nav>
    </>
  )
}
