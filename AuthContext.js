import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario autenticado
  const navigate = useNavigate();

  const login = (username, password, userType) => {
    setUser({ username, userType });
    // Redirigir dependiendo del tipo de usuario
    if (userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/'); // Redirigir a la página de inicio para usuarios normales
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
