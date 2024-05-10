import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import MisTurnos from "./views/Mis Turnos/MisTurnos";

function App() {
  return (
    <div className="container">
      <div className={"left-section"}>
        <Home />
        <Contacto />
      </div>
      <div className="right-section">
        <NavBar />
      </div>
      <div>
        <MisTurnos />
      </div>
    </div>
  );
}

export default App;
