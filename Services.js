import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import '../style/Services.css'; // Estilos de la página de servicios
import ServiceCard from '../components/ServiceCard';

// Datos de ejemplo para los servicios
const servicesData = [
  {
    id: '1',
    title: 'Siembra Ecológica',
    description: 'Realizamos sembrados utilizando métodos 100% ecológicos, garantizando la sostenibilidad del medio ambiente.',
    image: 'https://via.placeholder.com/300x200?text=Siembra+Ecol%C3%B3gica',
  },
  {
    id: '2',
    title: 'Cuidado del Medio Ambiente',
    description: 'Aplicamos técnicas de conservación ambiental para proteger los ecosistemas y promover la biodiversidad.',
    image: 'https://via.placeholder.com/300x200?text=Cuidado+del+Medio+Ambiente',
  },
  {
    id: '3',
    title: 'Procesamiento de Residuos',
    description: 'Transformamos residuos orgánicos en fertilizantes naturales, contribuyendo a la economía circular.',
    image: 'https://via.placeholder.com/300x200?text=Procesamiento+de+Residuos',
  },
];

const Services = () => {
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  // Función para manejar la navegación al home
  const handleGoHome = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      <p className="services-description">
        Ofrecemos una variedad de servicios enfocados en la sostenibilidad y el respeto por el medio ambiente. Descubre cómo podemos ayudarte.
      </p>

      <div className="services-grid">
        {servicesData.map(service => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>

            
      {/* Botón para volver al inicio */}
      <button className="go-home-button" onClick={handleGoHome}>
        Volver a la Página Principal
      </button>

    </div>
    
  );
};

export default Services;
