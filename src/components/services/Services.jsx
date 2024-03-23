import React from 'react'
import './Services.css'

export const Services = () => {
  return (
    <>
      {/* SERVICES */}
      <section id="services">
        <div className="containerServices">
          <h1 data-aos="zoom-in" data-aos-delay="300">Nuestros Servicios</h1>
          <div className="row">
            <div className="service" data-aos="flip-up" data-aos-delay="400">
              <i class="fa-solid fa-user-nurse"></i>
              <h2>Afiliaciones a seguridad social</h2>
              <p>Realizamos afiliaciones corporativas tanto a empresas nuevas y sus trabajadores, independientes y/o comerciantes.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="600">
              <i class="fa-solid fa-shield-halved"></i>
              <h2>Seguridad y Confianza</h2>
              <p>Pagas tus servicios después de recibir soportes de afiliación y recibe mensualmente tu planilla de pago de aportes.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="800">
              <i class="fa-solid fa-gavel"></i>
              <h2>Normativa</h2>
              <p>Realizamos todos los procesos bajo la resolución 2012 del 2022.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1000">
              <i class="fa-solid fa-house"></i>
              <h2>Perfilamiento de subsidio de vivienda y arrendamiento </h2>
              <p>Tramitamos tu subsidio de vivienda y arrendamiento ante cajas de compensación, te ayudamos a evitar filas y reprocesos en los diversos trámites.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1200">
              <i class="fa-solid fa-clock"></i>
              <h2>Reducción de tiempo e interés de créditos hipotecarios</h2>
              <p>Te ayudamos a pagar tu vivienda en un tiempo menor al establecido. ¡Estudio gratis!</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1400">
              <i class="fa-solid fa-clock"></i>
              <h2>Reducción de tiempo e interés de créditos hipotecarios</h2>
              <p>Te ayudamos a pagar tu vivienda en un tiempo menor al establecido. ¡Estudio gratis!</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1600">
              <i class="fa-solid fa-clock"></i>
              <h2>Reducción de tiempo e interés de créditos hipotecarios</h2>
              <p>Te ayudamos a pagar tu vivienda en un tiempo menor al establecido. ¡Estudio gratis!</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1800">
              <i class="fa-solid fa-clock"></i>
              <h2>Reducción de tiempo e interés de créditos hipotecarios</h2>
              <p>Te ayudamos a pagar tu vivienda en un tiempo menor al establecido. ¡Estudio gratis!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
