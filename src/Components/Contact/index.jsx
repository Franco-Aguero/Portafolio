import React, { useEffect, useState } from 'react';
import ContactCircle from '../Views/ContactCircle';
import informationUsed from './informationUsed';
import s from './Contact.module.css';

const Contact = () => {
    const { sectionTitle, waysToContact } = informationUsed;
    let [width, setWidth] = useState(window.innerWidth);
    let [changingBg, setChangingBg] = useState(false);
    useEffect(() => {
        const handleResize = () => setWidth(width = window.innerWidth)
        window.addEventListener('resize', handleResize)
        width >= 768 ? setChangingBg(changingBg = true) : setChangingBg(changingBg = false)
    },[width])

    return (
        <section className={s.SectionContainer} id="Contacto">
            <h1 style={{marginBottom:"3rem"}}>{sectionTitle.es}</h1>
            <div className={s.ContainerCircle}>
                {
                    waysToContact.map( el => <ContactCircle
                        image={el.img} url={el.url} name={el.name} bg={!changingBg ? el.bg :"none"}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default Contact;