import React from 'react';
import CvPdf from './Images/FRANCO-AGUERO.pdf'
import s from './AboutMe.module.css';
const AboutMe = () => {
    return (
        <section className={s.sobreMi} id="Sobre-mi">
           <h1>Sobre mi</h1>
            <div className={s.contenedorTextCv}>
                <p>    
                    Me llamo Franco tengo 19 años, Soy de 
                    Buenos Aires, Argentina. <br/>
                    Soy una persona la cual daria gusto tenerla 
                    en su equipo laboral. <br/>
                    En mis tiempos libres me gusta compartir
                    tiempo con mi familia y amigos. <br/>
                    Otra actividad que disfruto mucho son los deportes.         
                </p>

                <a href={CvPdf} download="Franco-Agüero-CV" id={s.btnDescargaCv} >Descargar CV </a>
            </div> 
        </section>
    )
}

export default AboutMe;
