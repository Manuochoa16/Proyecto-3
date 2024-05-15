import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./views/Contact/Contact";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import AboutUs from "./views/AboutUs/AboutUs";
import CreateAppointment from "./views/CreateAppointment/CreateAppointment";
import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crear-turno" element={<CreateAppointment />} />
        <Route path="/mis-turnos" element={<MisTurnos />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Contacto />
    </div>
  );
}

export default App;
