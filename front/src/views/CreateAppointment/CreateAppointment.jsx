import React, { useState } from "react";
import axios from "axios";
import styles from "./CreateAppointment.module.css";
import { useSelector } from "react-redux";

const CreateAppointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = useSelector((state) => state.user.user);

  if (!user) {
    return null;
  }

  const loggedUserId = user.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén completos
    if (!date || !time) {
      setErrorMessage("Por favor, complete todos los campos");
      return;
    }

    // Obtener el día de la semana de la fecha seleccionada
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay(); // 0 (Domingo) a 6 (Sábado)

    // Verificar si el día seleccionado no es sábado (día 6)
    if (dayOfWeek === 6) {
      setErrorMessage("No se pueden sacar turnos los sábados");
      return;
    }
    if (dayOfWeek === 7) {
      setErrorMessage("No se pueden sacar turnos los domingos");
      return;
    }
    if (selectedDate < currentDate) {
      setErrorMessage("No se pueden sacar turnos para fechas pasadas");
      return;
    }
    // Verificar el horario seleccionado
    const selectedTime = new Date(`2000-01-01T${time}`);
    const hour = selectedTime.getHours();
    if (hour < 8 || hour >= 16) {
      setErrorMessage(
        "Los turnos solo pueden ser programados entre las 08:00 y las 16:00 horas"
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/turns/schedule",
        {
          userId: loggedUserId,
          date,
          time,
        }
      );

      // Verificar si la solicitud fue exitosa
      if (response.status === 201) {
        // Éxito: limpiar los campos del formulario y mostrar alerta
        setDate("");
        setTime("");
        setErrorMessage("");
        alert("Turno creado exitosamente");
      } else {
        // Si la solicitud no fue exitosa, mostrar el mensaje de error
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      // Si ocurre algún error, manejarlo
      console.error("Error:", error);
      setErrorMessage("Error interno del servidor");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Crear Turno</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={styles.styledInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={styles.styledInput}
          />
        </div>
        <button type="submit" className={styles.createButton}>
          Create Appointment
        </button>
      </form>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default CreateAppointment;
