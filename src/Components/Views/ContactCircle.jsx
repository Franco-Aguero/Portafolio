import React from 'react';

import s from './ContactCircle.module.css';

const ContactCircle = ({image, url, name, bg}) => {
    return (      
        <a className={s.circle} style={{background:`${bg}`}} href={url} rel="noreferrer" target="_blank">    
            <img className={s.img} src={image} alt={name}/>
            <span>{name}</span>
        </a>
    )
}

export default ContactCircle;
