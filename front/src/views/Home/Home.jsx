import React from "react";
import styles from "./Home.module.css"; // Importa los estilos del archivo CSS
import HomeImage from "../../assets/Flyer médico profesional verde blanco  .png"; // Importa la imagen

const Home = () => {
  return (
    <div className={styles.homeImageContainer}>
      <img src={HomeImage} alt="About Us" className={styles.homeImage} />{" "}
      {/* Muestra la imagen */}
    </div>
  );
};

export default Home;
