import { useState } from "react";
import classes from "./ContactForm.module.css";
import arrow from "../../assets/arrow.svg";

function createData() {
  //devuelve un objeto con la información obtenida en el formulario
  return {
    contact: "",
    company: "",
    email: "",
    phone: "", //limitar a number?
    message: "",
    terms: false,
  };
}

function ContactForm() {
  //useState de data para controlar la info que almacenamos
  const [data, setData] = useState(createData());

  function updateData(event) {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    setData((d) => {
      const update = {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };

      return update;
    });
  }
  function handleLogin(event) {
    event.preventDefault(); //evita que el form actue de forma predeterminada al activar el botón, no se recargará la página.
    console.log(data);
  }
  return (
    <div className={classes.contactForm}>
      <div className={classes.contactFormLeft}>
        <p className={classes.contactFormSubtitle}>
          FIGMA IPSUM COMPONENT VARIANT MAIN LAYER.
        </p>
        <p className={classes.contactFormTitle}>
          Figma ipsum component variant main layer. Asset connection.
        </p>
      </div>
      <form onSubmit={handleLogin} className={classes.contactFormRight}>
        <span>
          <label htmlFor="contact">Nombre</label>
          <input
            name="contact"
            type="text"
            id="contact"
            value={data.contact}
            onChange={updateData}
          />
        </span>
        <span>
          <label htmlFor="company">Empresa</label>
          <input
            name="company"
            type="text"
            id="company"
            value={data.company}
            onChange={updateData}
          />
        </span>
        <span>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            value={data.email}
            onChange={updateData}
          />
        </span>
        <span>
          <label htmlFor="phone">Teléfono de contacto</label>
          <input
            name="phone"
            type="tel"
            id="phone"
            value={data.phone}
            onChange={updateData}
          />
        </span>
        <span className={classes.messageSpan}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            value={data.message}
            onChange={updateData}
            className={classes.messageArea}
          />
        </span>
        <span className={classes.termsSpan}>
          <input
            name="terms"
            type="checkbox"
            id="terms"
            value={data.terms}
            onChange={updateData}
          />
          <label htmlFor="terms">I accept the <a href="#">Terms</a></label>
        </span>
        <button disabled={!data.terms}>
          Enviar <img src={arrow} alt="right-arrow" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
