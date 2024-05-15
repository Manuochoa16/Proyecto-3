import { useState } from "react";
import { validate } from "../../helpers/validate";

function Login() {
  const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
  const passwordRegex = /^.{6,}$/;

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
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

    const newErrors = {};
    if (!usernameRegex.test(userData.username)) {
      newErrors.username = "Invalid username format";
    } else {
      newErrors.username = "";
    }

    if (!passwordRegex.test(userData.password)) {
      newErrors.password = "Invalid password format";
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      if (
        userData.username === "contra123" &&
        userData.password === "contra123"
      ) {
        alert("Usuario válido");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Login</h2>
      <div>
        <label>Usuario: </label>
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="Usuario123"
          onChange={handleInputChange}
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
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Login;
