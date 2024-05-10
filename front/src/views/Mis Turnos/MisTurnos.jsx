import misTurnos from "../helpers/misTurnos";
import { useState } from "react";
import Turno from "../../components/Turnos/Turno";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState(misTurnos);

  console.log(turnos);

  return (
    <>
      <h1>Mis Turnos</h1>
      <h3>Estos son los turnos del usuario</h3>

      <div>
        {turnos.map((turno) => (
          <Turno
            key={turno.id}
            id={turno.id}
            time={turno.time}
            date={turno.date}
            userId={turno.userId}
          />
        ))}
      </div>
    </>
  );
};

export default MisTurnos;
