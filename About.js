import React from 'react';
import '../style/About.css';  // Asegúrate de tener los estilos para esta página
import logo from '../assets/logo.png'; // Si tienes un logo, agrega la ruta correcta

const About = () => {
  return (
    <div className="about-container">
      <div className="about-logo">
        <img src={logo} alt="Logo de AgroEco" className="logo-img" />
      </div>
      <div className="about-content">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una empresa comprometida con la sostenibilidad y el cuidado del medio ambiente.
          Ofrecemos soluciones ecológicas en el ámbito agropecuario, incluyendo sembrado ecológico,
          cuidado de la biodiversidad y procesamiento de residuos biológicos. Nuestro objetivo es crear
          un futuro más verde y saludable para las próximas generaciones.
        </p>
        <p>
          Con un equipo de profesionales dedicados y un enfoque innovador, trabajamos para mejorar la
          productividad agrícola sin comprometer la salud del planeta.
        </p>
      </div>
    </div>
  );
};

export default About;
