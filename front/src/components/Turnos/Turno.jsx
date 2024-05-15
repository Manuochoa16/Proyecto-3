import styles from "./Turno.module.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Turno = ({ id, date, time, status }) => {
  const [estado, setEstado] = useState(status);
  const navigate = useNavigate();

  // Función para formatear la fecha
  const formatDate = (fechaString) => {
    const fecha = new Date(fechaString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-ES", options);
  };

  const cancelTurn = async () => {
    try {
      await axios.put(`http://localhost:3000/turns/cancel/${id}`);
      setEstado("cancelled");
      // Puedes agregar lógica adicional aquí después de cancelar el turno si es necesario
      navigate("/mis-turnos");
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
      // Mostrar mensaje de error al usuario
      alert(
        "Error al cancelar el turno. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  // Función para obtener la descripción del estado
  const getStatusDescription = () => {
    return estado === "active" ? "Activo" : "Cancelado";
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h4>Fecha: {formatDate(date)}</h4>
        <h4>Hora: {time}</h4>
      </div>
      <div className={estado === "active" ? styles.active : styles.canceled}>
        <h4>Estado: {getStatusDescription()}</h4>{" "}
        {/* Mostrar descripción del estado */}
      </div>
      {estado !== "cancelled" && (
        <button onClick={cancelTurn}>Cancelar Turno</button>
      )}
    </div>
  );
};

export default Turno;
