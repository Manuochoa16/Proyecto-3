import React from "react";
import styles from "./NavBar.module.css";
import imagen from "../../assets/logotipo odontologia ilustrado azul beige.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.navBarContainer}>
      <div>
        <Link to="/">
          <img className={styles.homeImage} src={imagen} alt="Mi imagen" />
        </Link>
      </div>
      {!user && (
        <>
          <Link to="/login" className={styles.principalButton}>
            <span>Ingresa</span>
          </Link>

          <Link to="/register" className={styles.principalButton}>
            <span>Regístrate</span>
          </Link>
        </>
      )}
      {user && (
        <Link to="/mis-turnos" className={styles.principalButton}>
          <span>Obtener turno</span>
        </Link>
      )}

      <Link to="/about-us" className={styles.principalButton}>
        <span>Sobre Nosotros</span>
      </Link>
    </div>
  );
};

export default NavBar;
