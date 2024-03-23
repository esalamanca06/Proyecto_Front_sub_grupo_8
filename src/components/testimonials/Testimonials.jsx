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
                <h3>Dayana Hidalgo</h3>
                <p>Excelente servicio, atención oportuna de calidad ⭐️⭐️⭐️⭐️⭐️</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Yessica Poveda</h3>
                <p>Excelente servicio y maravillosos beneficios.</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Ingrid Sanchez</h3>
                <p>Excelente servicio, oportuno y claro. super recomendado ⭐️⭐️⭐️⭐️⭐️</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Hector Camacho</h3>
                <p>Excelente servicio y efectividad, llegó recibiendo subsidio de arrendamiento desde hace varios meses 👌</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Karen Barbosa</h3>
                <p>Excelente atención y cumplimiento, brindan muy buen asesoramiento. 💯 Recomendado ⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300">
              <div className="myCarousel">
                <h3>Yessica Poveda</h3>
                <p>Excelente servicio y maravillosos beneficios.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
