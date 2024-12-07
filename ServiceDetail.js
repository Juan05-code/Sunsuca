import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  // Aquí podrías hacer una consulta a una API o tener datos predefinidos
  const service = servicesData.find(service => service.id === serviceId); 

  return (
    <div className="service-detail">
      <h2>{service.title}</h2>
      <img src={service.image} alt={service.title} />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
