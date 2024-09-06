import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '/logo.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay-text">
        <p>Bienvenido al Espacio Profesional de</p>
        <h1>Fabian Olmos</h1>
        <img src={logo} alt="Logo" className="home-logo" />
        <p className="description">Desarrollador Full Stack | Especializado en React, Vite y Bootstrap</p>
        <Link to="/portafolio">
          <button className="cta-button">Descubre mi trabajo</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
