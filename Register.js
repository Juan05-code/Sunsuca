import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    userType: 'user', // 'user' o 'admin'
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword, userType } = formData;

    // Validación de las contraseñas
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Verificar si el usuario ya existe en el localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some(user => user.username === username);

    if (userExists) {
      setError('El usuario ya está registrado');
      return;
    }

    // Guardar nuevo usuario en el localStorage
    const newUser = { username, password, userType };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Redirigir al login después de registrar
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h1>Registrar Usuario</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              name="userType"
              value="admin"
              checked={formData.userType === 'admin'}
              onChange={() => setFormData({ ...formData, userType: 'admin' })}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="user"
              checked={formData.userType === 'user'}
              onChange={() => setFormData({ ...formData, userType: 'user' })}
            />
            Usuario
          </label>
        </div>

        <button type="submit">Registrar</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Register;
