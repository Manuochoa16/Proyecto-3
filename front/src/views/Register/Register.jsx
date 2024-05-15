import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css"; // Importa los estilos del archivo CSS
import { useSelector } from "react-redux";

const Register = () => {
  const user = useSelector((state) => state.user.user); // Obtener el usuario del estado global
  const [form, setForm] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    nDni: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    nDni: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!form.email) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Ingresa un email válido";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!form.username) {
      newErrors.username = "El nombre de usuario es requerido";
      isValid = false;
    } else {
      newErrors.username = "";
    }

    if (!form.name) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!form.password) {
      newErrors.password = "La contraseña es requerida";
      isValid = false;
    } else if (form.password.length < 8 || form.password.length > 16) {
      newErrors.password = "La contraseña debe tener entre 8 y 16 caracteres";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      isValid = false;
    } else {
      newErrors.confirmPassword = "";
    }

    if (!form.birthdate) {
      newErrors.birthdate = "La fecha de nacimiento es requerida";
      isValid = false;
    } else {
      newErrors.birthdate = "";
    }

    if (!form.nDni) {
      newErrors.nDni = "El DNI es requerido";
      isValid = false;
    } else if (form.nDni.length !== 8) {
      newErrors.nDni = "El DNI debe tener 8 dígitos";
      isValid = false;
    } else {
      newErrors.nDni = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Eliminar confirmPassword del objeto form antes de enviarlo
    const { confirmPassword, ...formData } = form;
    if (validateForm()) {
      axios
        .post("http://localhost:3000/users/register", formData)
        .then((response) => {
          alert("Registro exitoso:", response.data);
          // Aquí podrías redirigir al usuario a una página de éxito o realizar otras acciones necesarias
        })
        .catch((error) => {
          alert("Error en el registro:", error);
          // Aquí podrías manejar el error, como mostrar un mensaje al usuario
        });
    }
  };

  // Si el usuario está autenticado, no mostrar el formulario de registro
  if (user) {
    return null;
  }

  return (
    <div className={styles.formContainer}>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email && styles.inputError}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={errors.username && styles.inputError}
        />
        {errors.username && (
          <span className={styles.error}>{errors.username}</span>
        )}
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={errors.name && styles.inputError}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={errors.password && styles.inputError}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword && styles.inputError}
        />
        {errors.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword}</span>
        )}
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          className={errors.birthdate && styles.inputError}
        />
        {errors.birthdate && (
          <span className={styles.error}>{errors.birthdate}</span>
        )}
        <label>DNI:</label>
        <input
          type="text"
          name="nDni"
          value={form.nDni}
          onChange={handleChange}
          className={errors.nDni && styles.inputError}
        />
        {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;

/////////////////////////////////////////////////////////////////////

// import { useState } from "react";
// import React from "react";
// import axios from "axios"; // Importa Axios
// import styles from "./Register.module.css"; // Importa el archivo CSS modular

// function Register() {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     birthdate: "",
//     nDni: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     birthdate: "",
//     nDni: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   const handleOnSubmit = (event) => {
//     event.preventDefault();

//     // Validar campos requeridos
//     const newErrors = {};

//     if (!userData.name) {
//       newErrors.name = "Name is required";
//     }
//     // Validar email con expresión regular
//     if (!userData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!userData.birthdate) {
//       newErrors.birthdate = "Birthdate is required";
//     }
//     // Validar DNI con expresión regular
//     if (!userData.nDni) {
//       newErrors.nDni = "DNI is required";
//     } else if (!/^\d{8}$/.test(userData.nDni)) {
//       newErrors.nDni = "Invalid DNI format";
//     }
//     if (!userData.username) {
//       newErrors.username = "Username is required";
//     }
//     // Validar contraseña con expresión regular
//     if (!userData.password) {
//       newErrors.password = "Password is required";
//     } else if (
//       !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
//         userData.password
//       )
//     ) {
//       newErrors.password =
//         "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one number";
//     }
//     if (!userData.confirmPassword) {
//       newErrors.confirmPassword = "Confirm Password is required";
//     } else if (userData.password !== userData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(newErrors);

//     // Si no hay errores, puedes enviar el formulario
//     if (Object.keys(newErrors).length === 0) {
//       // Realizar la solicitud POST utilizando Axios
//       axios
//         .post("http://localhost:3000/users/register", userData)
//         .then((response) => {
//           console.log("Formulario enviado:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error al enviar formulario:", error);
//         });
//     }
//   };

//   return (
//     <form onSubmit={handleOnSubmit} className={styles["register-form"]}>
//       <h2>Registrarse</h2>
//       <div>
//         <label>Nombre: </label>
//         <input
//           type="text"
//           value={userData.name}
//           name="name"
//           placeholder="Juan Perez"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
//       </div>
//       <div>
//         <label>Mail: </label>
//         <input
//           type="text"
//           value={userData.email}
//           name="email"
//           placeholder="ejemplo@ejemplo.com"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
//       </div>
//       <div>
//         <label>Fecha de nacimiento: </label>
//         <input
//           type="date"
//           value={userData.birthdate}
//           name="birthdate"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.birthdate && <p style={{ color: "red" }}>{errors.birthdate}</p>}
//       </div>
//       <div>
//         <label>DNI: </label>
//         <input
//           type="text"
//           value={userData.nDni}
//           name="nDni"
//           placeholder="12345678"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.nDni && <p style={{ color: "red" }}>{errors.nDni}</p>}
//       </div>
//       <div>
//         <label>Usuario: </label>
//         <input
//           type="text"
//           value={userData.username}
//           name="username"
//           placeholder="Nombre_123"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
//       </div>
//       <div>
//         <label>Contraseña: </label>
//         <input
//           type="password"
//           value={userData.password}
//           name="password"
//           placeholder="********"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
//       </div>
//       <div>
//         <label>Repetir contraseña: </label>
//         <input
//           type="password"
//           value={userData.confirmPassword}
//           name="confirmPassword"
//           placeholder="********"
//           onChange={handleInputChange}
//           className={styles["styled-input"]}
//         />
//         {errors.confirmPassword && (
//           <p style={{ color: "red" }}>{errors.confirmPassword}</p>
//         )}
//       </div>
//       <button type="submit" className={styles["registrarseButton"]}>
//         Enviar
//       </button>
//     </form>
//   );
// }

// export default Register;
