import { useState } from "react";
import React from "react";
import axios from "axios"; // Importa Axios
import styles from "./Register.module.css"; // Importa el archivo CSS modular

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // Validar campos requeridos
    const newErrors = {};

    if (!userData.name) {
      newErrors.name = "Name is required";
    }
    // Validar email con expresión regular
    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!userData.birthdate) {
      newErrors.birthdate = "Birthdate is required";
    }
    // Validar DNI con expresión regular
    if (!userData.nDni) {
      newErrors.nDni = "DNI is required";
    } else if (!/^\d{8}$/.test(userData.nDni)) {
      newErrors.nDni = "Invalid DNI format";
    }
    if (!userData.username) {
      newErrors.username = "Username is required";
    }
    // Validar contraseña con expresión regular
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        userData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number";
    }
    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Si no hay errores, puedes enviar el formulario
    if (Object.keys(newErrors).length === 0) {
      // Realizar la solicitud POST utilizando Axios
      axios
        .post("http://localhost:3000/users/register", userData)
        .then((response) => {
          console.log("Formulario enviado:", response.data);
        })
        .catch((error) => {
          console.error("Error al enviar formulario:", error);
        });
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles["register-form"]}>
      <h2>Registrarse</h2>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={userData.name}
          name="name"
          placeholder="Juan Perez"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Mail: </label>
        <input
          type="text"
          value={userData.email}
          name="email"
          placeholder="ejemplo@ejemplo.com"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Fecha de nacimiento: </label>
        <input
          type="date"
          value={userData.birthdate}
          name="birthdate"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate}</p>}
      </div>
      <div>
        <label>DNI: </label>
        <input
          type="text"
          value={userData.nDni}
          name="nDni"
          placeholder="12345678"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.nDni && <p style={{ color: "red" }}>{errors.nDni}</p>}
      </div>
      <div>
        <label>Usuario: </label>
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="Nombre_123"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Contraseña: </label>
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="********"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <div>
        <label>Repetir contraseña: </label>
        <input
          type="password"
          value={userData.confirmPassword}
          name="confirmPassword"
          placeholder="********"
          onChange={handleInputChange}
          className={styles["styled-input"]}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" className={styles["registrarseButton"]}>
        Enviar
      </button>
    </form>
  );
}

export default Register;
