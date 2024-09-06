import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";  // Asegúrate de importar la configuración de Firebase
import '../contacto.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "contactMessages"), {
        nombre,
        apellido,
        email,
        mensaje,
        timestamp: new Date()
      });
      setShowSuccessMessage(true);
    } catch (e) {
      console.error("Error añadiendo el documento: ", e);
      alert("Error enviando el mensaje");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'apellido':
        setApellido(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mensaje':
        setMensaje(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-container">
      <div className="contacto-card">
        <h3>Contacto</h3>
        {showSuccessMessage ? (
          <div className="success-message">
            ¡Tu mensaje fue enviado exitosamente, nos contactaremos a la brevedad!
          </div>
        ) : (
          <form onSubmit={handleClick} className="contact-form">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Escriba su nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Apellido</label>
              <input
                type="text"
                placeholder="Escriba su apellido"
                name="apellido"
                value={apellido}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                rows={3}
                placeholder="Escriba su mensaje"
                name="mensaje"
                value={mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contacto-button">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacto;
