import React from 'react';
import Profile from '../Images/profile.jpeg';
import Typewriter from 'typewriter-effect';
import informationUsed from "./informationUsed"
import s from './Start.module.css';

const Start = () => {  
    const { title, subTitle} = informationUsed;
    return (
        <section className={s.Presentation} id="Inicio">
            <div className={s.container}>
                <img id={s.ImgProfile} src={Profile} alt="Profile" />
                <div className={s.movingText}>
                    <h1>{title.es}</h1>
                    <h2>{subTitle.es}</h2>
                    <Typewriter
                    options={{
                        strings: ['Full Stack Developer', 'Front-End Developer', 'PERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </div>         
            </div>          
        </section>
    )
}

export default Start;