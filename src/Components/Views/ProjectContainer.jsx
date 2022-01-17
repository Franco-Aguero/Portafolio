import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import s from './ProjectContainer.module.css'

function ProjectContainer({ image, nameProject, url, information, BackTech, FrontTech, cmb, numPage}) {
    return (
        <div className={s.container}>
            <div className={s.row1}>
                <h3>{nameProject}</h3>
                <img src={image} alt={nameProject} />
               
                {numPage > 0 && <FontAwesomeIcon icon={faAngleLeft} onClick={ () => cmb(numPage = --numPage)} id={s.BtnLeft} />}
                {numPage < 3 && <FontAwesomeIcon icon={faAngleRight} onClick={ () => cmb(numPage = ++numPage)} id={s.BtnRight}/>}
            </div>
            
            <div className={s.row2}>
                <div>
                    <p>
                        {information}
                    </p>
                    { FrontTech && <span>{FrontTech}</span>} <br />
                    { BackTech && <span>{BackTech}</span>}
                </div>
                
                <a href={url} rel="noreferrer" target="_blank">
                    GitHub
                </a>   
            </div>
        </div>
    )
}

export default ProjectContainer;