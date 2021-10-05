import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PokeApp from './Images/PokeApp2.png';
import NoteBlock from './Images/BlockOfNote2.png';
import Wallet from './Images/wallet.png';
import s from './Project.module.css';
import ProjectContainer from "./Views/ProjectContainer";

const Project = () => {
    const pokeUrl1 = "https://github.com/Franco-Aguero/PokeApp",
    text1 =`Esta app fue diseñada con el objetivo de que los usuarios puedan buscar de distintas maneras pokemons y tambien puedan crearlos.`,
    name1 ="PokeApp",
    FrontTech1="El Front-End se llevo acabo con: React | Redux | CSS Modules.",
    BackTech1="En el Back-End se utilizo: Express | Sequelize | Postgres.";
    const walletUrl2 = "https://github.com/julianpiniel/Wall-et", 
    text2 =`Esta aplicacion fue pensada para que los usuarios se sientan libres de guardad sus notas para no olvidarlas.`,
    name2 ="Wall-et",
    FrontTech2 = "El Front-End se llevo acabo con: React | Redux | CSS Modules.",
    BackTech2 = null;
    const noteUrl3="https://github.com/Franco-Aguero/Notes-App", 
    text3 =`Esta aplicacion fue pensada para que los usuarios se sientan libres de guardad sus notas para no olvidarlas.`,
    name3 ="Notes",
    FrontTech3="El Front-End se llevo acabo con: React | Redux | CSS Modules.",
    BackTech3= null;
    


    let [accountant, setAccountant] = useState(0);
    return (
        <section className={s.SectionContainer} id="Proyectos">
            
            <h1 style={{marginBottom:"3rem"}}>Proyectos</h1>
            <div className={s.SubContainer}>
                {accountant > 0 && <FontAwesomeIcon icon={faAngleLeft} onClick={ () => setAccountant(accountant = --accountant)} id={s.BtnLeft} />}
                {
                    accountant === 0 ?
                    <ProjectContainer image={PokeApp} nameProject={name1} url={pokeUrl1} information={text1} FrontTech={FrontTech1} BackTech={BackTech1}/>
                    : accountant === 1?
                    <ProjectContainer image={Wallet} nameProject={name2} url={walletUrl2} information={text2} FrontTech={FrontTech2} BackTech={BackTech2}/>
                    : 
                    <ProjectContainer image={NoteBlock} nameProject={name3} url={noteUrl3} information={text3} FrontTech={FrontTech3} BackTech={BackTech3}/>
                }
                {accountant < 2 && <FontAwesomeIcon icon={faAngleRight} onClick={ () => setAccountant(accountant = ++accountant)} id={s.BtnRight}/>}
            </div>
        </section>
    )
}

export default Project;