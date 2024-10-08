import React from "react";
import "./styles/app.scss";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/logement/FichLogment";
import NoPage from "./pages/error/NoPage";
import Nav from "../src/components/nav/Nav.js"; // Import your Nav component

const App = () => {
  return (
    <HashRouter>
       {/* Include the Nav component here */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;