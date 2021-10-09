import React from 'react';
import Image from './Images/skill.png';
import Css3 from './Images/css3.png';
import Html5 from './Images/html5.png';
import Express from './Images/express.svg';
import Node from './Images/node.png';
import Postgresql from './Images/postgresql.png';
import ReactJs from './Images/react.png';
import JavaScript from './Images/javascript.png'
import Sequelize from './Images/sequelize.png'
import ReduxJs from './Images/redux.png';
import s from './Skills.module.css';

const Skills = () => {
    return (
        <section className={s.sectionSkills} id="Skills">
            <h1 style={{textAlign:"center", marginBottom:"0"}}>Technical Skills</h1>
            <div className={s.SkillsContainer} >
                <img src={Image} alt="Grafic Skill" />
                <article className={s.StackSkills}>
                    <p className={s.SubTitle}>Front-End</p>
                    <p >
                        <span className={s.to}>HTML <img src={Html5} alt="Html5" /></span>
                        <span className={s.to}>CSS <img src={Css3} alt="Css3" /></span>
                        <span className={s.to}>JavaScript <img src={JavaScript} alt="JavaScript" /></span>
                        <span className={s.to}>React <img src={ReactJs} alt="ReactJs" /></span>
                        <span className={s.to}>Redux <img src={ReduxJs} alt="Redux" /></span>
                    </p>
                    <p className={s.SubTitle}>Back-End</p>
                    <p>
                        <span className={s.to}>Node <img src={Node} alt="NodeJs" /></span>
                        <span className={s.to}>Express <img src={Express} alt="Express" /></span>
                        <span className={s.to}>Postgres <img src={Postgresql} alt="PostgreSQL" /></span>
                        <span className={s.to}>Sequelize <img src={Sequelize} alt="Sequelize" /></span>
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Skills;