import React from 'react';
import Profile from './Images/profile.jpg';

import s from './Start.module.css';
const Start = () => {
    return (
        <section className={s.Presentacion} id="Inicio">
            <div className={s.Presentacion__Texto}>
                <h2>Desarrollador Full Stack</h2>
                <p>Los hombres en algún punto son maestros de su destino.</p>
            </div>
            <img id={s.ImgProfile} src={Profile} alt="Profile" />
        </section>
    )
}

export default Start;
