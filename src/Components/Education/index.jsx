import React from 'react';
import informationUsed from './informationUsed';
import s from './Education.module.css';

const Education = () => {
    const { sectionTitle, certificateList} = informationUsed;
    return (
        <section className={s.SectionContainer} id="Educacion">
            <h1 style={{textAlign:"center"}}>{sectionTitle.es}</h1>
            <div>
                {/* {
                    certificateList.map( el =>
                        <article>
                            <h3>{el.place.es}</h3>
                            <span>{el.certificate.es}</span>
                            <span>{el.year}</span>
                        </article>
                    )
                } */}
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
                        Técnica N°1 "O.E.A"
                    </h3>
                    <span>Técnico Informático</span>
                    <span>2014-2020</span>
                </article>
            </div>
        </section>
    )
}

export default Education;