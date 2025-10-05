import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CAF from "./pages/CAF";
import CAFDetail from "./pages/CAFDetail";
import Patronato from "./pages/Patronato";
import PatronatoDetail from "./pages/PatronatoDetail";
import Impresa from "./pages/Impresa";
import ImpresaDetail from "./pages/ImpresaDetail";
import Immigrazione from "./pages/Immigrazione";
import ImmigrazioneDetail from "./pages/ImmigrazioneDetail";
import UniFor from "./pages/UniFor";
import UniForDetail from "./pages/UniForDetail";
import ServiziVari from "./pages/ServiziVari";
import ServiziVariDetail from "./pages/ServiziVariDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* CAF routes */}
        <Route path="/caf" element={<CAF />} />
        <Route path="/caf/:serviceId" element={<CAFDetail />} />
        {/* Patronato routes */}
        <Route path="/patronato" element={<Patronato />} />
        <Route path="/patronato/:serviceId" element={<PatronatoDetail />} />
        {/* Impresa routes */}
        <Route path="/impresa" element={<Impresa />} />
        <Route path="/impresa/:serviceId" element={<ImpresaDetail />} />
        {/* Immigrazione routes */}
        <Route path="/immigrazione" element={<Immigrazione />} />
        <Route path="/immigrazione/:serviceId" element={<ImmigrazioneDetail />} />
        <Route path="/unifor" element={<UniFor />} />
        <Route path="/unifor/:serviceId" element={<UniForDetail />} />
        <Route path="/servizi-vari" element={<ServiziVari />} />
        <Route path="/servizi-vari/:serviceId" element={<ServiziVariDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
