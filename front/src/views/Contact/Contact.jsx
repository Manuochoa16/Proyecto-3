import React from "react";
import styles from "./Contact.module.css"; // Importa el archivo CSS Module
import instagramImage from "../../assets/Instagram pagina.png";
import whatsappImage from "../../assets/Diseño sin título.png";
import facebookImage from "../../assets/Facebook pagina.png";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      {" "}
      {/* Aplica la clase CSS Module */}
      <div className={styles.contactItem}>
        <button className={styles.contactButton}>
          <img
            src={instagramImage}
            alt="Instagram"
            className={styles.contactImage} // Aplica la clase CSS Module sin comentarios
          />
        </button>
      </div>
      <div className={styles.contactItem}>
        <button className={styles.contactButton}>
          <img
            src={whatsappImage}
            alt="WhatsApp"
            className={styles.contactImage} // Aplica la clase CSS Module sin comentarios
          />
        </button>
      </div>
      <div className={styles.contactItem}>
        <button className={styles.contactButton}>
          <img
            src={facebookImage}
            alt="Facebook"
            className={styles.contactImage} // Aplica la clase CSS Module sin comentarios
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
