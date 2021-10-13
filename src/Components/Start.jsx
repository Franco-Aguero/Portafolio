import React from 'react';
import Profile from './Images/profile.jpg';
import Typewriter from 'typewriter-effect';
import s from './Start.module.css';

const Start = () => {  
    return (
        <section className={s.Presentation} id="Inicio">
            <div className={s.container}>
                <img id={s.ImgProfile} src={Profile} alt="Profile" />
                <div className={s.movingText}>
                    <h1>¡Hola!</h1>
                    <h2>Soy Franco</h2>
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