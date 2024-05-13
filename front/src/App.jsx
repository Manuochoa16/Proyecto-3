import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./views/Contact/Contact";
import MisTurnos from "./views/Mis Turnos/MisTurnos";
import Register from "./views/Register/Register";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <Register />
        </div>
        <MisTurnos />
      </div>
      <div>
        <Contacto />
      </div>
    </div>
  );
}

export default App;
