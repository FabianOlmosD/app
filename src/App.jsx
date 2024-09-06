import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import About from './components/About';
import Contact from './components/Contact';
import Portafolio from './components/Portafolio';

import './index.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={menuOpen ? 'open' : ''}>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/curriculum" onClick={toggleMenu}>Curriculum</Link>
            </li>
            <li>
              <Link to="/portafolio" onClick={toggleMenu}>Portafolio</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>Sobre mí</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
