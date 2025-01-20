import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
    </div>
  );
};

const styles = {
  main: {
    marginTop: '60px', // Asegura que el contenido no se superponga con el header
    padding: '20px',
  },
};

export default Root;