import React from "react";
import "./CallToAction.css";
import { FaMapPin } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import largeImg from "../assets/images/large-side-img.jpg";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="cta-content">
          {/* IMAGE + CHAT BADGE */}
          <div className="cta-image-wrapper">
            <img src={largeImg} alt="CTA visual" className="cta-image" />

            {/* BIG ROUND CHAT BADGE */}
            <div className="chat-badge">
              <p>
                Insieme dal<br />
                <strong>2009</strong>
              </p>
            </div>
          </div>

          {/* GRAY LINE ABOVE ICONS */}
          <div className="gray-line"></div>

          {/* ICONS SIDE BY SIDE UNDER IMAGE */}
          <div className="cta-icons-below">
            <div className="icon-text">
              <FaMapPin className="cta-inline-icon" />
              <p>Apri una sede periferica</p>
            </div>
            <div className="icon-text">
              <FaFolderOpen className="cta-inline-icon" />
              <p>
                Apri un centro<br />
                di raccolta come dipendente
              </p>
            </div>
          </div>

          {/* GRAY LINE BELOW ICONS */}
          <div className="gray-line"></div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
