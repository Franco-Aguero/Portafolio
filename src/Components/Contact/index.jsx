import React, { useEffect, useState } from 'react';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactCircle from '../Views/ContactCircle';
import s from './Contact.module.css';

const Contact = () => {
    const urlLinkedin = "https://www.linkedin.com/in/franco-aguero", name1 = "LinkedIn", bg1 = "rgb(0 119 181 / 81%)";
    const urlEmail = "https://mail.google.com/a/?view=cm&fs=1&to=aguerofranco2002@gmail.com", name2 = "Gmail", bg2 = "rgb(233 67 52 / 74%)";
    const urlWhatsapp = "https://wa.link/9x1can", name3 = "WhatsApp", bg3 = "rgb(77 176 81 / 85%)";
    let [width, setWidth] = useState(window.innerWidth)
    let [changingBg, setChangingBg] = useState(false)
    useEffect(() => {
        const handleResize = () => setWidth(width = window.innerWidth)
        window.addEventListener('resize', handleResize)
        width >= 768 ? setChangingBg(changingBg = true) : setChangingBg(changingBg = false)
    },[width])

    return (
        <section className={s.SectionContainer} id="Contacto">
            <h1 style={{marginBottom:"3rem"}}>Contacto</h1>
            <div className={s.ContainerCircle}>
                <ContactCircle image={faWhatsapp} url={urlWhatsapp} name={name3} bg={!changingBg ? bg3 :"none"}/>
                <ContactCircle image={faLinkedinIn} url={urlLinkedin} name={name1} bg={!changingBg ? bg1 :"none"}/>
                <ContactCircle image={faEnvelope} url={urlEmail} name={name2} bg={!changingBg ? bg2 :"none"}/>    
            </div>
        </section>
    )
}

export default Contact;