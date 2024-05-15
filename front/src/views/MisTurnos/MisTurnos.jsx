import { useEffect } from "react";
import Turno from "../../components/Turnos/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointment } from "../../redux/reducer";
import { Link } from "react-router-dom";

const MisTurnos = () => {
  const turnos = useSelector((state) => state.appointments);
  const { loggin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTurns = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${user.id}`);
      console.log(res.data);
      dispatch(addAppointment(res.data.appointments));
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
    }
  };

  useEffect(() => {
    if (!loggin) {
      navigate("/register");
    } else {
      getTurns();
    }
  }, []); // El arreglo de dependencias está vacío, lo que significa que este efecto se ejecutará una vez al montar el componente y luego cada vez que el componente se vuelva a mostrar

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Turnos</h1>
      <h3 className={styles.title}>Estos son los turnos del usuario</h3>
      <p className={styles.title}>
        Solo se pueden sacar turnos de 08:00 AM a 16:00 PM, y de Lunes a Viernes
      </p>
      {turnos.length === 0 ? (
        <p>Aún no hay turnos agendados para este usuario.</p>
      ) : (
        <div className={styles["turno-list"]}>
          {turnos.map((turno) => (
            <Turno
              key={turno.id}
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
            />
          ))}
        </div>
      )}
      <Link to="/crear-turno">
        <button>Reservar Turno</button>
      </Link>
    </div>
  );
};

export default MisTurnos;

///////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Turno from "../../components/Turnos/Turno";
// import styles from "./MisTurnos.module.css";
// import axios from "axios";

// const MisTurnos = () => {
//   const [turnos, setTurnos] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/turns")
//       .then((res) => setTurnos(res.data))
//       .catch((error) => {
//         console.error("Error al obtener los turnos:", error);
//       });
//   }, []);

//   return (
//     <div className={styles.misTurnosContainer}>
//       <h1 className={styles.misTurnosTitle}>Lista de turnos</h1>
//       {turnos.map((turno) => (
//         <div key={turno.id}>
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
