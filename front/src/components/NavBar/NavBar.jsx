import React from "react";
import styles from "./NavBar.module.css";
import imagen from "../../assets/logotipo odontologia ilustrado azul beige.png";
// import CreateAppointment from "../../views/CreateAppointment/CreateAppointment";
// import Login from "../../views/Login/Login";
// import Register from "../../views/Register/Register";
// import AboutUs from "../../views/AboutUs/AboutUs";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div>
        <img className={styles.homeImage} src={imagen} alt="Mi imagen" />
      </div>
      <p>
        <button className={styles.principalButton}>Sobre Nosotros</button>
      </p>
      <p>
        <button className={styles.principalButton}>Crear turno</button>
      </p>
      <p>
        <button className={styles.principalButton}>Regístrate</button>
      </p>
      <p>
        <button className={styles.principalButton}>Ingresá</button>
      </p>
    </div>
  );
};

export default NavBar;

// const NavBar = () => {
//   return (
//     <div className={styles.navBarContainer}>
//       <div>
//         <img className={styles.homeImage} src={imagen} alt="Mi imagen" />
//       </div>
//       <p>
//         <button className={styles.principalButton}>Sobre Nosotros</button>
//       </p>
//       <p>
//         <button className={styles.principalButton}>Crear turno</button>
//       </p>
//       <p>
//         <button className={styles.principalButton}>Regístrate</button>
//       </p>
//       <p>
//         <button className={styles.principalButton}>Ingresá</button>
//       </p>
//     </div>
//   );
// };

// export default NavBar;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const NavBar = () => {
//   return (
//     <div className={styles.navBarContainer}>
//       <h1 className={styles.navBarTitle}>
//         <img src={imagen} alt="Mi imagen" className={styles.homeImage} />
//         <CreateAppointment />
//         <Register />
//         <Login />
//         <AboutUs />
//       </h1>
//     </div>
//   );
// };

// export default NavBar;
