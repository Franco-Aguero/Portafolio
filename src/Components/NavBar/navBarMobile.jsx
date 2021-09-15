import React, { useEffect, useState } from 'react';
import { UilBars, UilMoon, UilGraduationCap, UilUser, UilBracketsCurly, UilClipboardNotes, UilEnvelopeCheck, UilEstate, UilTimesSquare } from '@iconscout/react-unicons'
import s from './navBarMobile.module.css'

const NavBarMobile = () => {
    let [showMenu, setShowMenu] = useState(false)
    let [width, setWidth] = useState(window.innerWidth)

    const togleMenu = () => {
        setShowMenu(showMenu = !showMenu)
    }
    
    useEffect(() => {
        const handleResize = () => setWidth(width = window.innerWidth)
        window.addEventListener('resize', handleResize)
    })
    
    useEffect(()=>{
        if(width > 768)setShowMenu(showMenu = true);
        if(width < 768 && showMenu)setShowMenu(showMenu = false);
    },[width])

    return (
        
            <footer className={s.footerNavDown} id={showMenu ? s.footerNavTop : 'null'}>
                { !showMenu?
                    <> 
                        <span>Franco</span>
                        <div>
                            <UilMoon/> 
                            <UilBars onClick={ () => togleMenu()}/>
                        </div>
                    </>
                    : 
                    <> 
                        <ul>
                            <li>
                                <a href="#Inicio" onClick={ ()=> width > 768? null : togleMenu()}> Inicio <UilEstate/></a>
                            </li>

                            <li>
                                <a href="#Sobre-mi" onClick={ () => width > 768? null : togleMenu()}> Sobre mi <UilUser/></a>
                            </li>
            
                            <li>
                                <a href="#Skills" onClick={ () => width > 768? null : togleMenu()}>Skills <UilBracketsCurly/></a>
                            </li>
            
                            <li>
                                <a href="#Proyectos" onClick={ () => width > 768? null : togleMenu()}>Proyectos <UilClipboardNotes/></a> 
                            </li>

                            <li>
                                <a href="#Educacion" onClick={ () => width > 768? null : togleMenu()}>Educacion <UilGraduationCap/> </a>
                            </li>
                            
                            <li>
                                <a href="#Contacto" onClick={ () => width > 768? null : togleMenu()}>Contacto <UilEnvelopeCheck/></a> 
                            </li>
                            <UilTimesSquare id={s.navClose} onClick={ () => togleMenu() }/>
                        </ul>
                        <UilMoon id={s.darkMode}/> 
                    </>
                }
                
            </footer>
    
    )
}

export default NavBarMobile;
