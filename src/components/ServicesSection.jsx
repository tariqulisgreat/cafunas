import React from "react";
import "./ServicesSection.css";
import logoSmall from "../assets/images/site-logo.png"; // replace with your small logo
import service1Img from "../assets/images/service1.jpg";
import service2Img from "../assets/images/service2.jpg";
import service3Img from "../assets/images/service3.jpg";
import service4Img from "../assets/images/service4.jpg";

const servicesData = [
  {
    img: service1Img,
    icon: "fas fa-file-invoice-dollar",
    name: "SPID / PEC / Firma Digitale",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    img: service2Img,
    icon: "fas fa-file-alt",
    name: "Permesso di soggiorno",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    img: service3Img,
    icon: "fas fa-file-signature",
    name: "Ricongiungimento familiare",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    img: service4Img,
    icon: "far fa-building",
    name: "Cittadinanza",
    desc: "Lorem ipsum dolor sit amet.",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <img src={logoSmall} alt="Small Logo" className="services-logo" />
      <p className="services-intro">Cosa facciamo</p>
      <h1 className="services-heading">I servizi del Caf</h1>

      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.img} alt={service.name} className="service-image" />
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
            </div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
      {/* Full width button */}
  <button className="view-all-btn">Vedi tutti i servizi</button>
    </div>
    
  );
};

export default ServicesSection;
