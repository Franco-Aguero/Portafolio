import React from 'react';
import Linkedin from './Images/ico_linked_black1.png';
import Email from './Images/ico_email_black12.png';
import Wapp from './Images/ico_whatsapp1.png';
import ContactCircle from './Views/ContactCircle';
import s from './Contact.module.css';
const Contact = () => {
    const urlLinkedin = "https://www.linkedin.com/in/franco-aguero", name1 = "LinkedIn", bg1 = "rgb(0 119 181 / 81%)";
    const urlEmail = "https://mail.google.com/a/?view=cm&fs=1&to=aguerofranco2002@gmail.com", name2 = "Gmail", bg2 = "rgb(233 67 52 / 74%)";
    const urlWhatsapp = "https://wa.link/9x1can", name3 = "WhatsApp", bg3 = "rgb(77 176 81 / 85%)";
    return (
        <section className={s.SectionContainer} id="Contacto">
            <h1 style={{marginBottom:"3rem"}}>Conctacto</h1>
            <div className={s.ContainerCircle}>
                <ContactCircle image={Wapp} url={urlWhatsapp} name={name3} bg={bg3}/>
                <ContactCircle image={Linkedin} url={urlLinkedin} name={name1} bg={bg1}/>
                <ContactCircle image={Email} url={urlEmail} name={name2} bg={bg2}/>    
            </div>
        </section>
    )
}

export default Contact;
