import React from 'react';
import Linkedin from './Images/ico_linked.png';
import Email from './Images/ico_email.png';
import s from './Contact.module.css';
const Contact = () => {
    return (
        <section className={s.SectionContainer} id="Contacto">
            <h1 style={{marginBottom:"3rem"}}>Conctacto</h1>
            <div className={s.ContainerCircle}>
                <div className={s.circulo}>
                    <a href="https://www.linkedin.com/in/franco-agüero-13706b212" rel="noreferrer" target="_blank">    
                        <img className={s.img} src={Linkedin} alt="Linkedin"/>
                    </a>
                 </div>
    
                 <div className={s.circulo}>
                    <a href="https://mail.google.com/a/?view=cm&fs=1&to=aguerofranco2002@gmail.com" rel="noreferrer" target="_blank">    
                        <img className={s.img} src={Email} alt="Email"/>
                    </a>
                 </div>
    
                 <div className={s.circulo}>
                    <a href="https://wa.link/9x1can" rel="noreferrer" target="_blank">    
                        <img className={s.img} src="https://image.flaticon.com/icons/png/512/733/733585.png" alt="Whatsapp"/>
                    </a>
                 </div>
               </div>
        </section>
    )
}

export default Contact;
