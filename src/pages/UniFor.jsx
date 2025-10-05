import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

const UniFor = () => {
  const cards = [
    {
      id: "formazione",
      icon: "🎓",
      title: "Corso di formazione CAF e Patronato",
      desc: "Percorsi per formare operatori qualificati in ambito fiscale e previdenziale. 🧑‍🏫"
    },
    {
      id: "lingua",
      icon: "🗣️",
      title: "Corsi ed esami di lingua italiana A2 e B1",
      desc: "Necessari per permessi di soggiorno UE e cittadinanza italiana. 🇮🇹"
    },
    {
      id: "informatica",
      icon: "💻",
      title: "Corsi di informatica di base (Quadro EU)",
      desc: "Percorsi per apprendere le competenze digitali fondamentali. 💾"
    }
  ];

  const containerStyle = {
    maxWidth: "1200px",
    margin: "50px auto",
    padding: "0 20px",
  };

  const headerStyle = { textAlign: "center", padding: "60px 20px 40px", backgroundColor: "#003366" };
  const headerTitle = { fontSize: "3rem", marginBottom: "10px", color: "#ffffffff" };
  const headerSubtitle = { fontSize: "1.2rem", color: "#ffffffff" };

  const cardsContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "40px",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
    cursor: "pointer",
    height: "320px",
  };

  const cardIcon = { fontSize: "3.5rem", marginBottom: "15px" };
  const cardTitle = { fontSize: "1.2rem", fontWeight: "600", color: "#003366", marginBottom: "10px" };
  const cardText = { fontSize: "0.95rem", color: "#555", lineHeight: "1.4" };

  return (
    <div>
      <TopBar />
      <MainMenu />

      {/* Header */}
      <header style={headerStyle}>
        <h1 style={headerTitle}>Servizi UniFor</h1>
        <p style={headerSubtitle}>
          Percorsi formativi per operatori CAF e Patronato e corsi professionali riconosciuti.
        </p>
      </header>

      {/* Cards */}
      <div style={containerStyle}>
        <div style={cardsContainer}>
          {cards.map((card) => (
            <Link
              key={card.id}
              to={`/unifor/${card.id}`}
              style={cardStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                })
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "translateY(0)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                })
              }
            >
              <div style={cardIcon}>{card.icon}</div>
              <h2 style={cardTitle}>{card.title}</h2>
              <p style={cardText}>{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UniFor;
