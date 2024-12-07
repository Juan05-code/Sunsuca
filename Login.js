import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Usamos el contexto de autenticación
import { useNavigate } from 'react-router-dom';   // Navegación entre rutas
import '../style/Login.css';  // Asegúrate de que los estilos estén bien importados

const Login = () => {
  const { login } = useAuth();  // Utilizamos el contexto de autenticación
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [userType, setUserType] = useState('user');  // Establecemos el tipo de usuario (admin o usuario)
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Hook para navegar entre rutas

  // Función que maneja los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    // Obtener los usuarios del localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Buscar si el usuario existe y sus credenciales son correctas
    const user = storedUsers.find(
      (user) => user.username === username && user.password === password && user.userType === userType
    );

    if (user) {
      // Si el usuario es válido, hacemos login y redirigimos según el tipo de usuario
      login(username, password, userType);
    } else {
      // Si el usuario no existe o las credenciales son incorrectas
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={credentials.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              name="userType"
              value="admin"
              checked={userType === 'admin'}
              onChange={() => setUserType('admin')}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="user"
              checked={userType === 'user'}
              onChange={() => setUserType('user')}
            />
            Usuario
          </label>
        </div>
        <button type="submit">Iniciar Sesión</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        ¿No tienes una cuenta? <a href="/register">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;
