import React, { useEffect, useState } from 'react';
import { UilBars, UilTimesSquare } from '@iconscout/react-unicons';
import informationUsed from './informationUsed';
import utils from '../Utils/utils';
import s from './navBarMobile.module.css'

const NavBarMobile = () => {
    const { nameList } = informationUsed, {spacebarToDash} = utils;
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
                { 
                !showMenu?
                    <> 
                        <a href="#Sobre-mi" id={s.name}>Franco</a>
                        <UilBars id={s.menu} onClick={ () => togleMenu()}/>
                    </>
                : 
                    <> 
                        <ul>
                            {
                                nameList.map( el =>
                                    <li>
                                        <a href={`#${spacebarToDash(el.es)}`} onClick={ ()=> width > 768? null : togleMenu()}> 
                                            {el.es} {el.icon}
                                        </a>
                                    </li>
                                )                 
                            }
                            <UilTimesSquare id={s.navClose} onClick={ () => togleMenu() }/>
                        </ul>
                    </>
                }
            </footer>
    )
}

export default NavBarMobile;