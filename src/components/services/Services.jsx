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
              <h2>Suites de productividad</h2>
              <p>Equipa a tu equipo con habilidades sólidas en software, lo que aumenta la eficiencia y calidad del trabajo, permitiendo una mayor productividad y resultados más precisos en las tareas diarias.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="600">
              <i class="fa-solid fa-shield-halved"></i>
              <h2>Desarrollos de software a la medida</h2>
              <p>Proporcionamos soluciones personalizadas que mejoran la eficiencia operativa de tu empresa y te destacan en el mercado, lo que resulta en procesos más fluidos, menos errores y una mayor satisfacción del cliente.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="800">
              <i class="fa-solid fa-gavel"></i>
              <h2>Gestión de relaciones con clientes</h2>
              <p>Implementación de sistemas centralizados que impulsan la satisfacción del cliente y aumentan las ventas al proporcionar una atención más personalizada y eficiente, generando relaciones más sólidas y leales con los clientes.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1000">
              <i class="fa-solid fa-house"></i>
              <h2>Automatización de procesos empresariales</h2>
              <p>Reduce tareas manuales y repetitivas, ahorrando tiempo y recursos, y mejorando la precisión y eficiencia en tus operaciones, lo que conduce a una mayor productividad y menores costos operativos.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1200">
              <i class="fa-solid fa-clock"></i>
              <h2>Seguridad informática y cumplimiento normativo</h2>
              <p>Protege tus datos empresariales, mitigando riesgos y garantizando la confianza del cliente y el cumplimiento de regulaciones, lo que resulta en una mayor seguridad de los datos y una reputación empresarial más sólida.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1400">
              <i class="fa-solid fa-clock"></i>
              <h2>Análisis de datos y Business Intelligence</h2>
              <p>Toma decisiones informadas, anticipar tendencias y oportunidades, ganando una ventaja competitiva en el mercado al optimizar estrategias y procesos empresariales.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1600">
              <i class="fa-solid fa-clock"></i>
              <h2>Gestión de proyectos y colaboración</h2>
              <p>Mejora la planificación y coordinación de tus proyectos, aumentando la eficiencia y la satisfacción del cliente al cumplir con los plazos y objetivos establecidos de manera más efectiva.</p>
            </div>
            <div className="service" data-aos="flip-up" data-aos-delay="1800">
              <i class="fa-solid fa-clock"></i>
              <h2>Optimización de Infraestructura Tecnológica</h2>
              <p>Garantiza el rendimiento y la fiabilidad de tu infraestructura, reduciendo costos y tiempos de inactividad, lo que permite una operación más fluida y rentable de los sistemas y aplicaciones empresariales.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
