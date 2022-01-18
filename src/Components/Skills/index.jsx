import React from 'react';
import Image from '../Images/skill.png';
import informationUsed from './informationUsed';
import s from './Skills.module.css';

const Skills = () => {
    const {frontEnd, backEnd, sectionTitle} = informationUsed;
    let frontEndKey = 0, backEndKey = 0;
    return (
        <section className={s.sectionSkills} id="Skills">
            <h1 style={{textAlign:"center", marginBottom:"0"}}>{sectionTitle.es}</h1>
            <div className={s.SkillsContainer} >
                <img src={Image} alt="Grafic Skill" />
                <article className={s.StackSkills}>
                    <p className={s.SubTitle}>Front-End</p>
                    <p >
                        {
                            frontEnd.map( el => 
                                <span key={backEndKey++}>
                                    {el.name} <img src={el.img} alt={el.name}/>
                                </span>
                            )
                        }
                    </p>
                    <p className={s.SubTitle}>Back-End</p>
                    <p>
                        {
                            backEnd.map( el => 
                                <span key={frontEndKey++}>
                                    {el.name} <img src={el.img} alt={el.name}/>
                                </span>
                            )
                        }
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Skills;