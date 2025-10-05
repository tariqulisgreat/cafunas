import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaEnvelope, FaClock } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-left">
          <FaFacebookF className="topbar-icon" />
          <FaYoutube className="topbar-icon" />
          <FaTwitter className="topbar-icon" />
          <span className="topbar-text">Benvenuti nel sito di Caf Unsic</span>
        </div>

        <div className="topbar-right">
          <span className="topbar-item">
            <FaEnvelope className="topbar-icon" />
            info@cafunsic.it
          </span>
          <span className="topbar-item">
            <FaClock className="topbar-icon" />
            Lun - Ven 9:00 - 18:00
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
