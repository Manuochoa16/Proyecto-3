import React from "react";
import aboutUsImage from "../../assets/Post de Instagram Día Mundial de la Salud Profesional Azul.png"; // Importa la imagen
import styles from "./AboutUs.module.css"; // Importa los estilos

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <img src={aboutUsImage} alt="About Us" className={styles.image} />{" "}
      {/* Muestra la imagen */}
      <div className={styles.text}>
        <h2>Nuestros profesionales</h2> {/* Texto "Nuestros profesionales" */}
        <ul>
          {/* Lista de nombres y matrículas ficticias */}
          <li>Dra. Gladys Otta - M.N.: 567890</li>
          <li>Dr. Juan Pérez - M.N.: 123456</li>
          <li>Dra. María González - M.N.: 234567</li>
          <li>Dr. Pedro Martínez - M.N.: 345678</li>
          <li>Dra. Ana López - M.N.: 456789</li>
          <li>Dra. Laura Fernández - M.N.: 678901</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
