import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from './ContactCircle.module.css';

const ContactCircle = ({image, url, name, bg}) => {
    return (      
        <a className={s.circle} style={{background:`${bg}`}} href={url} rel="noreferrer" target="_blank">    
            <FontAwesomeIcon icon={image}  className={s.icon} />
            <span>{name}</span>     
        </a>
    )
}

export default ContactCircle;