import React from "react";
import "./ContactSection.css";
import contactImage from "../assets/images/contact-image.jpg"; // replace with your image
import siteLogo from "../assets/images/site-logo.png"; // small site logo

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-circle">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <img src={siteLogo} alt="Site Logo" className="contact-logo" />
          <p className="contact-intro">Contattaci</p>

          <form className="contact-form">
            <input type="text" placeholder="Nome e Cognome" required />
            <input type="email" placeholder="Indirizzo mail" required />
            <input type="tel" placeholder="Telefono" required />
            <textarea placeholder="Scrivi il messaggio qui" rows="5" required></textarea>
            <button type="submit">Invia</button>
          </form>

          <h1 className="contact-note">
            Scrivi qui il <br /> tuo messaggio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
