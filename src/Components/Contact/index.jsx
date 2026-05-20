import React from "react";
import informationUsed from "./informationUsed";
import s from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const { sectionTitle, waysToContact } = informationUsed;

  return (
    <section className={s.SectionContainer} id="Contacto">
      <h1>{sectionTitle.es}</h1>

      <div className={s.ContainerGrid}>
        {waysToContact.map((el, index) => (
          <a
            key={index}
            href={el.url}
            target="_blank"
            rel="noopener noreferrer"
            className={s.Card}
          >
            <div className={s.IconContainer} style={{ color: el.bg }}>
              <FontAwesomeIcon icon={el.img} />
            </div>

            <div className={s.TextContent}>
              <h3>{el.name}</h3>
              <span>{el.label || `Conectar via ${el.name}`}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
