import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';  // Asegúrate de tener los estilos para el navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Sunsuca</h1>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/services" className="navbar-link">Servicios</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
