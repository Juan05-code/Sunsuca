import React from 'react';
import '../style/ServiceCard.css'; // Estilos específicos para la tarjeta de servicio

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <button className="service-card-button">Ver más</button>
      </div>
    </div>
  );
};

export default ServiceCard;
