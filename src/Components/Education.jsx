import React from 'react';
import s from './Education.module.css';

const Education = () => {
    return (
        <section className={s.SectionContainer} id="Educacion">
            <h1 style={{textAlign:"center"}}>Educacion</h1>
            <div>
                <article>
                    <h3>
                        Academia <br/>
                        Henry 
                    </h3>
                    <span>Full Stack Developer</span>
                    <span>2021</span>
                </article>
                <article>
                    <h3>
                        Secundaria <br/>
                        Tecnica N°1 "O.E.A"
                    </h3>
                    <span>Técnico Informático</span>
                    <span>2014-2020</span>
                </article>
            </div>
        </section>
    )
}

export default Education;