import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const informationUsed = {
    sectionTitle: {es:"Contacto", en:"",},
    waysToContact: [
        { img: faWhatsapp, url:"https://api.whatsapp.com/send?phone=541134979961&text=Hola%20Franco,%20te%20habla...", name:"WhatsApp", bg:"rgb(77 176 81 / 85%)"}, 
        { img: faLinkedinIn, url:"https://www.linkedin.com/in/franco-aguero", name: "LinkedIn", bg: "rgb(0 119 181 / 81%)"},
        { img: faEnvelope, url:"https://mail.google.com/a/?view=cm&fs=1&to=aguerofranco2002@gmail.com", name:"Gmail", bg:"rgb(233 67 52 / 74%)"},
    ]
}
export default informationUsed;