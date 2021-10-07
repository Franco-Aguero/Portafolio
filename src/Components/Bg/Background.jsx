import React from 'react';
import Particles from 'react-particles-js';
/* import Particles from "react-tsparticles"; */
import s from './bg.module.css'

function Background() {
    let list = [], numberSpan = 20;
    for (let i = 0 ; i <= numberSpan; i++){
        list.push(i)
    }

    return (
        <div className={s.background}>
            { list.map(el => <span key={el}></span>) }
        </div>
    )
}

export default Background;