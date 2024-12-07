import React from 'react';
import '../style/Home.css';  // Asegúrate de tener los estilos adecuados para esta página
import logo from '../assets/logo.png'; // Asegúrate de tener el logo en la ruta correcta

const Home = () => {
  return (
    <div className="home-container">
      {/* Logo centrado */}
      <div className="home-logo">
        <img src={logo} alt="Logo de AgroEco" className="logo-img" />
      </div>

      {/* Eslogan debajo del logo */}
      <div className="home-slogan">
        <h1>Sembrando un futuro más verde</h1>
        <p>Innovación, sostenibilidad y compromiso con el medio ambiente.</p>
      </div>

      {/* Contenido de contacto y copyright */}
      <div className="home-footer">
        <a href="/contact" className="contact-link">Contáctanos</a>
        <p>&copy; 2024 SUNSUCA. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Home;
