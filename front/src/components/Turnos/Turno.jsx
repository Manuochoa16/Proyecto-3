import React from "react";
import styles from "./Turno.module.css"; // Importa el archivo CSS Module

const Turno = ({ id, time, date, status }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className={styles.turnoContainer}>
      <p className={styles.turnoTitle}>
        Número de turno: <br />
        {id}
      </p>
      <p className={styles.turnoItem}>
        Horario del turno: <br />
        {time}
      </p>
      <p className={styles.turnoItem}>
        Fecha: <br />
        {formattedDate}
      </p>
      <p className={styles.turnoItem}>
        Estado: <br />
        {status}
      </p>
      <p>
        <button>Cancelar Turno</button>
      </p>
    </div>
  );
};

export default Turno;
