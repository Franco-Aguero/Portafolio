import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const informationUsed = {
  sectionTitle: { es: "Contacto", en: "Contact" },
  waysToContact: [
    {
      img: faWhatsapp,
      url: "https://api.whatsapp.com/send?phone=541134979961&text=Hola%20Franco...",
      name: "WhatsApp",
      bg: "#25D366",
    },
    {
      img: faLinkedinIn,
      url: "https://www.linkedin.com/in/franco-aguero",
      name: "LinkedIn",
      bg: "#0077B5",
    },
    {
      img: faEnvelope,
      url: "https://mail.google.com/a/?view=cm&fs=1&to=franco.aguero.md@gmail.com",
      name: "Gmail",
      bg: "#EA4335",
    },
  ],
};
export default informationUsed;
