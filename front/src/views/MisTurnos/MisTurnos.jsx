import React, { useState, useEffect } from "react";
import Turno from "../../components/Turnos/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/turns")
      .then((res) => setTurnos(res.data))
      .catch((error) => {
        console.error("Error al obtener los turnos:", error);
      });
  }, []);

  return (
    <div className={styles.misTurnosContainer}>
      <h1 className={styles.misTurnosTitle}>Lista de turnos</h1>
      {turnos.map((turno) => (
        <div key={turno.id}>
          <Turno
            id={turno.id}
            time={turno.time}
            date={turno.date}
            status={turno.status}
            setTurnos={setTurnos}
          />
        </div>
      ))}
    </div>
  );
};

export default MisTurnos;

///////////////////////////////////////////////////////////////////////////////////////////////

// const MisTurnos = () => {
//   const [turnos, setTurnos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/turns")
//       .then((res) => setTurnos(res.data))
//       .catch((error) => {
//         console.error("Error al obtener los turnos:", error);
//         // Muestra un mensaje de error al usuario
//         alert(
//           "Error al obtener los turnos. Por favor, inténtalo de nuevo más tarde."
//         );
//       });
//   }, []);

//   return (
//     <div className={styles.misTurnosContainer}>
//       <h1 className={styles.misTurnosTitle}>Lista de turnos</h1>
//       {turnos.map((turno) => (
//         <div className={styles.turnoCard} key={turno.id}>
//           <Turno
//             id={turno.id}
//             time={turno.time}
//             date={new Date(turno.date).toLocaleDateString()}
//             status={turno.status}
//             setTurnos={setTurnos}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MisTurnos;

// import misTurnos from "../helpers/misTurnos";
// import { useState } from "react";
// import Turno from "../../components/Turnos/Turno";
// import styles from "./MisTurnos.module.css";
// import axios from "axios";
// import { useEffect } from "react";

// const MisTurnos = () => {
//   const [turnos, setTurnos] = useState(misTurnos);

//   useEffect(() => {
//     axios.get("http://localhost:3000/turns").then((res) => setTurnos(res.data));
//   }, []);

//   return (
//     <div className={styles.misTurnosContainer}>
//       <h1 className={styles.misTurnosTitle}> Lista de turnos</h1>
//       {turnos.map((turno) => (
//         <div className={styles.turnoCard} key={turno.id}>
//           <Turno
//             id={turno.id}
//             time={turno.time}
//             date={turno.date}
//             status={turno.status}
//             setTurnos={setTurnos}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MisTurnos;

// const MisTurnos = () => {
//   const [turnos, setTurnos] = useState(misTurnos);

//   return (
//     <div className={styles.misTurnosContainer}>
//       <h1 className={styles.misTurnosTitle}> Lista de turnos</h1>
//       {turnos.map((turno) => (
//         <div className={styles.turnoCard} key={turno.id}>
//           <Turno
//             id={turno.id}
//             time={turno.time}
//             date={turno.date}
//             status={turno.status}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
