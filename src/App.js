import './App.css';
import './normalize.css';

import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Soluciones from './pages/Soluciones';

import Contacto from './pages/Contacto';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      {showPreloader && (
        <div className="preloader">
          <div className="jars">
            <span>j</span>
            <span>A</span>
            <span>R</span>
            <span>S</span>
          </div>
        </div>
      )}

      <div className={`main-content ${!showPreloader ? "fade-in" : "hidden"}`}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="soluciones" element={<Soluciones />} />

            <Route path="contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}
export default App;
