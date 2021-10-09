import React from 'react';
import CvPdf from './Images/FRANCO-AGUERO.pdf'
import Gif from './Images/gifa1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import s from './AboutMe.module.css';
const AboutMe = () => {
    return (
        <section className={s.sobreMi} id="Sobre-mi">
           <h1>Sobre mi</h1>
            <div className={s.contenedorTextCv}>   
                <img src={Gif} alt="Developent" />    

                <div className={s.right}>
                    <p>
                        Me llamo Franco, soy de Buenos Aires, Argentina.
                        En mis tiempos libres me gusta compartir
                        momentos con la familia y amigos. Otra actividad que disfruto mucho son los deportes.
                        
                    </p>
                    <p>
                        Soy Desarrollador Full Stack y Técnico Informático. Me gusta aprender 
                        cosas nuevas y enfrentarme constantemente a desafios para mejorar en el dia a dia.
                    </p>
                    <p>    
                        Lo que me distingue del resto es la habilidad
                        de adaptacion, el desenvolvimiento frente a situaciones complejas y los valores que adquiri en los 
                        deportes que realice.
                    </p>
                    <a href={CvPdf} download="Franco-Agüero-CV" id={s.btnDescargaCv} >
                        Descargar CV 
                        <FontAwesomeIcon icon={faArrowDown} id={s.icon} />
                    </a>

                </div>          
            </div> 
            
        </section>
    )
}

export default AboutMe;
