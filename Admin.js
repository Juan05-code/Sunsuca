import React, { useState } from 'react';
import '../style/Admin.css';

const Admin = () => {
  // Estado que mantiene los servicios
  const [services, setServices] = useState([
    { id: 1, title: 'Siembra Ecológica', description: 'Cultivamos productos sin el uso de químicos.' },
    { id: 2, title: 'Cuidado del Medio Ambiente', description: 'Implementamos prácticas sostenibles en la agricultura.' },
    { id: 3, title: 'Procesamiento de Residuos', description: 'Transformamos residuos orgánicos en compost.' },
  ]);

  // Estado para el formulario de edición
  const [newService, setNewService] = useState({ title: '', description: '' });
  const [editMode, setEditMode] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);

  // Maneja el cambio en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  // Agregar un nuevo servicio
  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.title && newService.description) {
      const newServiceData = { id: Date.now(), title: newService.title, description: newService.description };
      setServices((prevServices) => [...prevServices, newServiceData]);
      setNewService({ title: '', description: '' });
    }
  };

  // Editar un servicio existente
  const handleEditService = (e) => {
    e.preventDefault();
    if (newService.title && newService.description && currentServiceId !== null) {
      const updatedServices = services.map((service) =>
        service.id === currentServiceId ? { ...service, title: newService.title, description: newService.description } : service
      );
      setServices(updatedServices);
      setNewService({ title: '', description: '' });
      setEditMode(false);
      setCurrentServiceId(null);
    }
  };

  // Activar el modo de edición
  const handleEditClick = (service) => {
    setNewService({ title: service.title, description: service.description });
    setEditMode(true);
    setCurrentServiceId(service.id);
  };

  // Eliminar un servicio
  const handleDeleteService = (id) => {
    const filteredServices = services.filter((service) => service.id !== id);
    setServices(filteredServices);
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>
      
      {/* Formulario para agregar o editar servicios */}
      <form className="service-form" onSubmit={editMode ? handleEditService : handleAddService}>
        <input
          type="text"
          name="title"
          placeholder="Título del servicio"
          value={newService.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Descripción del servicio"
          value={newService.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editMode ? 'Actualizar Servicio' : 'Agregar Servicio'}</button>
      </form>

      {/* Mostrar lista de servicios */}
      <div className="services-list">
        <h2>Servicios Actuales</h2>
        {services.length > 0 ? (
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button onClick={() => handleEditClick(service)}>Editar</button>
                <button onClick={() => handleDeleteService(service.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay servicios disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
