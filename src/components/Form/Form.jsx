import React from "react";
import Button from "../../components/Button/Button";
import "./Form.css";

function Form() {
  return (
    <div className="form-container">
      <div className="form-box p-5">
        <h2 className="form-title">Formulario de Contacto</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Introduce tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico: 
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Introduce tu correo electrónico"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono:
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Introduce tu teléfono"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje:
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <Button type="submit" className="custom-button" text="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Form;
