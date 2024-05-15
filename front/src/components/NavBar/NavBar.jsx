import React from "react";
import styles from "./NavBar.module.css";
import imagen from "../../assets/logotipo odontologia ilustrado azul beige.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div>
        <Link to="/">
          <img className={styles.homeImage} src={imagen} alt="Mi imagen" />
        </Link>
      </div>
      <p>
        <Link to="/login" className={styles.principalButton}>
          Ingresá
        </Link>
      </p>
      <p>
        <Link to="/about-us" className={styles.principalButton}>
          Sobre Nosotros
        </Link>
      </p>
      <p>
        <Link to="/crear-turno" className={styles.principalButton}>
          Crear turno
        </Link>
      </p>
      <p>
        <Link to="/register" className={styles.principalButton}>
          Regístrate
        </Link>
      </p>
    </div>
  );
};

export default NavBar;
