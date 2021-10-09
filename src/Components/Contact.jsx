import React from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactCircle from './Views/ContactCircle';
import s from './Contact.module.css';

const Contact = () => {
    const urlLinkedin = "https://www.linkedin.com/in/franco-aguero", name1 = "LinkedIn", bg1 = "rgb(0 119 181 / 81%)";
    const urlEmail = "https://mail.google.com/a/?view=cm&fs=1&to=aguerofranco2002@gmail.com", name2 = "Gmail", bg2 = "rgb(233 67 52 / 74%)";
    const urlWhatsapp = "https://wa.link/9x1can", name3 = "WhatsApp", bg3 = "rgb(77 176 81 / 85%)";
    return (
        <section className={s.SectionContainer} id="Contacto">
            <h1 style={{marginBottom:"3rem"}}>Contacto</h1>
            <div className={s.ContainerCircle}>
                <ContactCircle image={faWhatsapp} url={urlWhatsapp} name={name3} bg={bg3}/>
                <ContactCircle image={faLinkedinIn} url={urlLinkedin} name={name1} bg={bg1}/>
                <ContactCircle image={faEnvelope} url={urlEmail} name={name2} bg={bg2}/>    
            </div>
        </section>
    )
}

export default Contact;