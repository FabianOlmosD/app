import React from 'react';
import '../index.css';

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <h1 className="fade-in">Fabián Daniel Olmos</h1>
      <p className="fade-in"><strong>Correo Electrónico:</strong> olmosfabian@ruedasarg.com.ar</p>
      <p className="fade-in"><strong>Teléfono:</strong> +54 11 6356 9666</p>
      <p className="fade-in"><strong>Fecha de Nacimiento:</strong> 27/01/1977</p>

      <h2 className="section-title">Perfil Profesional</h2>
      <p className="fade-in">Profesional con más de 20 años de experiencia en ecommerce y desarrollo web. Competente en la implementación de estrategias de marketing digital, optimización de plataformas de venta en línea, y gestión de proyectos tecnológicos. Especializado en React, desarrollo web full stack, y gestión de ecommerce.</p>

      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="experience fade-in">
        <h3>Director de Ecommerce</h3>
        <p><em>Ruedas Argentinas SACIFIA, Munro, Buenos Aires | 2000 - Presente</em></p>
        <ul>
          <li>Lideré la transformación digital de la empresa, aumentando las ventas en línea en un 150%.</li>
          <li>Implementé estrategias de marketing digital y optimización de plataformas de ecommerce.</li>
          <li>Gestioné equipos multidisciplinarios para desarrollo y optimización de la plataforma.</li>
        </ul>
      </div>
      <div className="experience fade-in">
        <h3>Asesor en Ecommerce</h3>
        <p><em>Consultorías Independientes | 2015 - 2022</em></p>
        <ul>
          <li>Asesoré en la implementación y optimización de soluciones de ecommerce para:</li>
          <ul>
            <li><a href="https://chipititas.com.ar/" target="_blank" rel="noopener noreferrer">Chipititas</a></li>
            <li><a href="https://performancecenter.com.ar/" target="_blank" rel="noopener noreferrer">Performance Center</a></li>
            <li><a href="https://rodadosdancar.com.ar/" target="_blank" rel="noopener noreferrer">Rodados Dancar</a></li>
            <li><a href="https://todocalculadoras.com.ar/" target="_blank" rel="noopener noreferrer">Todo Calculadoras</a></li>
          </ul>
        </ul>
      </div>
      <div className="experience fade-in">
        <h3>Asistente en Procesos de Control de Calidad</h3>
        <p><em>Terrabusi SA, Munro, Buenos Aires | 1995 - 2000</em></p>
        <ul>
          <li>Participé en la implementación de sistemas de control de calidad, mejorando la eficiencia y reduciendo defectos.</li>
        </ul>
      </div>

      <h2 className="section-title">Formación Académica</h2>
      <div className="education fade-in">
        <h3>Licenciatura en Administración de Empresas (en curso)</h3>
        <p><em>Universidad de Buenos Aires | 2000 - Presente</em></p>
        <p>Completadas la mayoría de las materias, a 5 materias de finalizar la carrera.</p>
      </div>

      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills fade-in">
        <ul>
          <li><strong>Desarrollo Web:</strong> React, Node.js, JavaScript, HTML, CSS, Bootstrap, Firebase.</li>
          <li><strong>Ecommerce:</strong> Dirección de proyectos, gestión de plataformas, análisis de rendimiento.</li>
          <li><strong>Marketing Digital:</strong> Estrategias en redes sociales, SEO, SEM, Google Ads.</li>
          <li><strong>Software y Herramientas:</strong> Microsoft Office, Adobe Photoshop, MySQL, Figma.</li>
        </ul>
      </div>

      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="projects fade-in">
        <ul>
          <li><strong>Desarrollo de Sitio Web de Comercio Electrónico:</strong> Lideré el desarrollo de sitios web de ecommerce para Chipititas y Performance Center, optimizando la experiencia del usuario y aumentando las ventas.</li>
          <li><strong>Transformación Digital en Ruedas Argentinas:</strong> Implementé soluciones tecnológicas que mejoraron significativamente las operaciones y la eficiencia de la empresa.</li>
        </ul>
      </div>

      <h2 className="section-title">Idiomas</h2>
      <div className="languages fade-in">
        <ul>
          <li><strong>Español:</strong> Nativo</li>
          <li><strong>Inglés:</strong> Intermedio</li>
        </ul>
      </div>

      <h2 className="section-title">Otros</h2>
      <div className="others fade-in">
        <p><strong>Director Técnico de Futsal (Título Oficial AFA)</strong></p>
        <p>2020 - 2024</p>
      </div>
    </div>
  );
};

export default Curriculum;
