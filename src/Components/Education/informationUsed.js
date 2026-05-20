import {
  faGraduationCap,
  faLaptop,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const informationUsed = {
  sectionTitle: {
    es: "Educación",
    en: "",
  },
  certificateList: [
    {
      type: "SECUNDARIA",
      place: {
        es: 'Técnica N°1 "O.E.A"',
      },
      certificate: {
        es: "Técnico Informático",
      },
      year: "2014 - 2020",
      icon: faLaptop,
    },
    {
      type: "ACADEMIA",
      place: {
        es: "Henry",
      },
      certificate: {
        es: "Full Stack Developer",
      },
      year: "2021",
      icon: faGraduationCap,
    },
    {
      type: "TERCIARIO",
      place: {
        es: "Tecnicatura en Programación",
      },
      certificate: {
        es: "En curso",
      },
      year: "Actualidad",
      icon: faCode,
    },
  ],
};
export default informationUsed;
