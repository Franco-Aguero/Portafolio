import React from 'react'
import s from './ProjectContainer.module.css'

function ProjectContainer({ image, nameProject, url, information, BackTech, FrontTech}) {
    return (
        <div className={s.container}>
            <h3>{nameProject}</h3>
            <img src={image} alt={nameProject} />
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