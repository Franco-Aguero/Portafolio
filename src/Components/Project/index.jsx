import React, { useState } from "react";
import informationUsed from "./informationUsed"
import ProjectContainer from "../Views/ProjectContainer";
import s from './Project.module.css';

const Project = () => {
    const { sectionTitle, projectList } = informationUsed;
    let [accountant, setAccountant] = useState(0);
    return (
        <section className={s.SectionContainer} id="Proyectos">
            <h1 style={{marginBottom:"3rem"}}>{sectionTitle.es}</h1>
            <div className={s.SubContainer}>    
                <ProjectContainer numPage={accountant} cmb={setAccountant} 
                    nameProject={projectList[accountant].name} image={projectList[accountant].img} 
                    url={projectList[accountant].url} information={projectList[accountant].information.es}
                    FrontTech={projectList[accountant].FrontTech} BackTech={projectList[accountant].BackTech}
                />
            </div>
        </section>
    )
}

export default Project;