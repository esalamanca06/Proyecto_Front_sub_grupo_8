import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="containerTestimonials">
        <div id="box">
          <h1 data-aos="zoom-in" data-aos-delay="300">Testimonios</h1>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Michael Quiroga</h3>
                <p>Gracias a las formaciones sobre automatización de procesos en nuestra entidad hemos aumentado la productividad ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Jefferson Pulido</h3>
                <p>Mi equipo de trabajo optimizo mucho los tiempos de despliegues de los proyectos gracias a sus programas enfocados a JavaScript 💯</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Erick Salamanca</h3>
                <p>Nuestro departamento de DEVOPS genero nuevas ideas para el levantamiento de infraestructura mucho mas optima y actualizada para las necesidades actuales y futuras del negocio 😁</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>David Perez</h3>
                <p> Ahora tenemos una idea mucho más clara para poder levantar procesos vinculados a la IA y asi expandir nuestro portafolio de negocio</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
