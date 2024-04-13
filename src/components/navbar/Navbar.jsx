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
            <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://wa.me/+0000000000/" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="/login"><i className="fa-solid fa-user"></i></a>
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
