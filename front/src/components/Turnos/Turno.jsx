import React from "react";

const Turno = ({ id, time, date, userId }) => {
  return (
    <div className="turno">
      <p>Número de turno: {id}</p>
      <p>Horario del turno: {time}</p>
      <p>Fecha: {date}</p>
      <p>Id de usuario: {userId}</p>
    </div>
  );
};

export default Turno;
