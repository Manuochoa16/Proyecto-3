import React from "react";
import instagramImage from "../../assets/Instagram pagina.png";
import whatsappImage from "../../assets/Diseño sin título.png";
import facebookImage from "../../assets/Facebook pagina.png";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <button>
          <img
            src={instagramImage}
            alt="Instagram"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
      <div style={{ marginRight: "10px" }}>
        <button>
          <img
            src={whatsappImage}
            alt="WhatsApp"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
      <div>
        <button>
          <img
            src={facebookImage}
            alt="Facebook"
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Contact;
