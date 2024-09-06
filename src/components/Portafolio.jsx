import React from 'react';
import '../index.css'; // Asegúrate de que esté alineado con los estilos globales

const Portafolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Mi Portafolio</h1>
      <div className="projects-grid">
        <div className="project-card">
          <img src="/surge.jpg" alt="Surge" className="project-logo" />
          <h3>Surge</h3>
          <p>Empresa dedicada a la asesoría eCommerce, optimización de ventas y gestión de plataformas digitales.</p>
          <a href="https://www.surge.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/edn.png" alt="El Depósito Norte" className="project-logo" />
          <h3>El Depósito Norte</h3>
          <p>Sitio web oficial de la banda de rock, diseñado con enfoque en la experiencia del usuario y contenido multimedia.</p>
          <a href="https://www.eldepositonorte.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/ch.jpg" alt="Chipititas" className="project-logo" />
          <h3>Chipititas</h3>
          <p>Asesoría en eCommerce para la tienda online de productos textiles para bebés.</p>
          <a href="https://chipititas.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/pf.jpg" alt="Performance Center" className="project-logo" />
          <h3>Performance Center</h3>
          <p>Asesoría en eCommerce y optimización de ventas para tienda especializada en productos automotrices.</p>
          <a href="https://performancecenter.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/tc.jpg" alt="Todo Calculadoras" className="project-logo" />
          <h3>Todo Calculadoras</h3>
          <p>Asesoría en eCommerce para la tienda especializada en calculadoras.</p>
          <a href="https://todocalculadoras.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/rd.jpg" alt="Rodados Dancar" className="project-logo" />
          <h3>Rodados Dancar</h3>
          <p>Asesoría en eCommerce para la tienda de rodados y bicicletas.</p>
          <a href="https://rodadosdancar.com.ar" className="cta-button" target="_blank" rel="noopener noreferrer">Visitar</a>
        </div>
        <div className="project-card">
          <img src="/fo.png" alt="Portafolio" className="project-logo" />
          <h3>Mi Portafolio</h3>
          <p>Sitio web personal, desarrollado con React, Vite, y Bootstrap, para mostrar mis habilidades y proyectos.</p>
          <a href="#" className="cta-button" target="_blank" rel="noopener noreferrer">Explorar</a>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
