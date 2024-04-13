import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <>
      {/* INIT PAGE INFORMATION */}
      <section className="infoContainer" id="home">
        <div className="imagesLeft zoomIn"></div>
        <div className="textRight">
          <p className="infoTitle bounceIn">¿Deseas Especializarte?</p>

          <p className="infoDesc">
            Somos esa empresa que necesitas en tu ámbito laboral, te ayudamos a
            hacer crecer el conocimiento técnico y estratégico de tu equipo
            enfocándolos y formándolos en las herramientas que actualmente
            generan más demanda de mercado a nivel de desarrollo e
            implementación de optimizaciones enfocadas en la optimización de
            procesos.
          </p>
        </div>
      </section>
    </>
  );
};
