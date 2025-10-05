import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <div className="footer">
        <div className="footer-container">
          {/* CONTACT INFO */}
          <div className="footer-section contact-info">
            <h3>Contatti</h3>
            <p><FaPhoneAlt /> 06 58333803</p>
            <p><FaPhoneAlt /> 06 58301953</p>
            <p><FaEnvelope /> info@cafunsic.it</p>
            <p><FaMapMarkerAlt /> Via Angelo Bargoni 78 - 00153 – Roma</p>
          </div>

          {/* LATEST NEWS */}
          <div className="footer-section latest-news">
            <h3>RSS News Agenzia Entrate</h3>
            <p>
              Compravendite immobiliari: online i dati del secondo trimestre 2025.
              Crescono gli scambi di abitazioni: +8,1% rispetto allo scorso anno
              (comunicato stampa) Settembre 11, 2025
            </p>
            <p>
              Società in amministrazione straordinaria. Firmato il protocollo di
              intesa Entrate-Fintecna per procedure più veloci (comunicato stampa)
              Settembre 10, 2025
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div className="footer-section useful-links">
            <h3>Link utili</h3>
            <ul>
              <li>I nostri progetti</li>
              <li>Chi Siamo</li>
              <li>I nostri servizi</li>
              <li>Eventi</li>
            </ul>
          </div>

          {/* NEWSLETTER / PORTAL */}
          <div className="footer-section newsletter">
            <h3>Resta in contatto con noi</h3>
            <p>Registrati al nostro portale per il cittadino Personal Caf</p>
            <input type="email" placeholder="Inserisci la tua email" />
            <button>Iscriviti</button>
          </div>
        </div>
      </div>

      {/* SECONDARY FOOTER */}
      <div className="footer-bottom-yellow">
        <p>
          © Copyright 2025 - Caf Unsic &nbsp;|&nbsp;
          <span>Terms & Conditions</span> / <span>Privacy Policy</span> / <span>Sitemap</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
