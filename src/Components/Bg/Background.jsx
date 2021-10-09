import React from 'react';
import s from './bg.module.css'

const Background = () => {
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