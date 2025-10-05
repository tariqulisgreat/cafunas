import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "./MainMenu.css";
import { FaBars, FaTimes } from "react-icons/fa";

const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="mainmenu">
      <div className="mainmenu-container">
        {/* Left: Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "#003366", fontWeight: "bold", fontSize: "1.5rem" }}>
            Caf Unsic
          </Link>
        </div>

        {/* Center: Menu Links */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li><Link to="/caf">CAF</Link></li>
          <li><Link to="/patronato">Patronato</Link></li>
          <li><Link to="/impresa">Impresa</Link></li>
          <li><Link to="/immigrazione">Immigrazione</Link></li>
          <li><Link to="/unifor">UniFor</Link></li>
          <li><Link to="/servizi-vari">Servizi Vari</Link></li>
        </ul>

        {/* Right: Button */}
        <div className="menu-button">
          <a href="#">Accedi al gestionale<br />Clicca qui!</a>
        </div>

        {/* Mobile toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
