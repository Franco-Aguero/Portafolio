import informationUsed from "./informationUsed";
import s from "./Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = () => {
  const { sectionTitle, certificateList } = informationUsed;

  return (
    <section className={s.SectionContainer} id="Educacion">
      <div className={s.header}>
        <h1>{sectionTitle.es}</h1>
      </div>

      <div className={s.timeline}>
        {certificateList.map((el, index) => (
          <article
            key={index}
            className={s.card}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className={s.left}>
              <div className={s.iconContainer}>
                <FontAwesomeIcon icon={el.icon} className={s.icon} />
              </div>

              <div className={s.content}>
                <small>{el.type}</small>
                <h3>{el.place.es}</h3>
                <span>{el.certificate.es}</span>
              </div>
            </div>

            <div className={s.yearContainer}>
              <span>{el.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
