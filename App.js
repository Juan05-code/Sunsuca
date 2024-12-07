import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';  // Importamos la página de registro

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            {/* Rutas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Ruta de registro */}

            {/* Rutas protegidas */}
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
