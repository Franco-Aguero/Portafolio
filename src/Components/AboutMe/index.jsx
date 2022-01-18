import React from 'react';
import CvPdf from '../Images/FRANCO-AGUERO.pdf';
import Gif from '../Images/illustratorMen.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import informationUsed from './informationUsed';
import s from './AboutMe.module.css';

const AboutMe = () => {
    const { textCv, sectionTitle, paragraph1, paragraph2, paragraph3} = informationUsed;
    return (
        <section className={s.sobreMi} id="Sobre-mi">
           <h1>{sectionTitle.es}</h1>
            <div className={s.contenedorTextCv}>   
                <img src={Gif} alt="Developent" />    
                <div className={s.right}>
                    <p>{paragraph1.es}</p>
                    <p>{paragraph2.es}</p>
                    <p>{paragraph3.es}</p>
                    <a href={CvPdf} download="Franco-Agüero-CV" id={s.btnDescargaCv} >
                        {textCv.es} CV 
                        <FontAwesomeIcon icon={faArrowDown} id={s.icon} />
                    </a>
                </div>          
            </div>             
        </section>
    )
}

export default AboutMe;