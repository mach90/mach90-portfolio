import React, { useEffect, useState } from 'react';
import ScrollTo from '../utils/ScrollTo';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../public/logo.svg'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';

function Nav({handleTheme, theme}) {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const navContainerStyle = "fixed w-screen z-50";
    const headerCoordsContainerStyle = "flex flex-row justify-between items-center py-2 px-4 lg:px-[10%] xl:px-[20%] bg-lightPrimary dark:bg-darkPrimary text-lightSubheading dark:text-darkSubheading border-b border-lightPrimaryBorder dark:border-darkPrimaryBorder";
    // const headerCoordsStickyContainerStyle = "flex flex-row justify-between items-center border-b border-dark py-2 border-b border-black px-4 bg-light dark:bg-dark w-full fixed top-0 z-20";
    const headerCoordsLogoContainerStyle = "flex flex-row gap-4 items-center"
    const headerCoordsLogoStyle = "h-12 ";
    const headerCoordsNameStyle = "flex flex-col uppercase font-heading font-black text-xl leading-none text-lightHeading dark:text-darkHeading";
    const headerCoordsJobStyle = "text-lightSubheading dark:text-darkSubheading text-sm";
    const headerHamburgerMenuStyle = "text-2xl";
    const headerNavStyle = "hidden md:flex flex-row gap-4 md:gap-8 lg:gap-12 font-bold font-standard text-sm md:text-lg  items-center";
    const headerNavHamburgerStyle = "h-screen flex flex-col gap-12 font-bold font-standard text-4xl items-center pt-20";
    const headerNavItemStyle = "text-lightSubheading dark:text-darkSubheading hover:text-lightHeading dark:hover:text-darkHeading duration-300";
    const headerDarkmodeMenuLightStyle = "text-lightSubheading hover:text-lightHeading text-2xl bg-lightSecondary rounded-full p-1";
    const headerDarkmodeMenuDarkStyle = "text-darkSubheading hover:text-darkHeading  text-2xl bg-darkSecondary rounded-full p-1";
    
    /* //////////////////////////////////////////////////
    SCROLL TRIGGER
    ////////////////////////////////////////////////// */
    // const [isSticky, setIsSticky] = useState(false);
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
            
    //         if (scrollPosition >= 150 && !isSticky) {
    //             setIsSticky(true);
    //         }

    //         if (scrollPosition < 140 && isSticky) {
    //             setIsSticky(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
        
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [isSticky]);

    /* //////////////////////////////////////////////////
    HAMBURGER MENU
    ////////////////////////////////////////////////// */
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    function handleHamburgerMenuOpen() {
        setHamburgerMenuOpen(!hamburgerMenuOpen);
    }

    /* //////////////////////////////////////////////////
    SCROLL TO
    ////////////////////////////////////////////////// */
    function handleScrollTo(e, where, how, block) {
        ScrollTo(where, how, block);
        setHamburgerMenuOpen(false);
    }

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={navContainerStyle}>
            <div className={headerCoordsContainerStyle}>
                <div className={headerCoordsLogoContainerStyle}>
                    <a href="https://mach90.netlify.app"><img src={Logo} alt="Mach logo" className={headerCoordsLogoStyle} /></a>
                    <a href="https://mach90.netlify.app"><p className={headerCoordsNameStyle}>mach90<span className={headerCoordsJobStyle}>Frontend dev</span></p></a>
                </div>
                <div className={headerNavStyle}>
                    <button onClick={(e) => handleScrollTo(e, 'top', 'smooth', 'start')} id="top-btn" className={headerNavItemStyle}><RiHome2Line /></button>
                    <button onClick={(e) => handleScrollTo(e, 'projects', 'smooth', 'start')} id="projects-btn" className={headerNavItemStyle}>Projects</button>
                    <button onClick={(e) => handleScrollTo(e, 'stacks', 'smooth', 'start')} id="stacks-btn" className={headerNavItemStyle}>Stacks</button>
                    <button onClick={(e) => handleScrollTo(e, 'contact', 'smooth')} id="contact-btn" className={headerNavItemStyle}>Contact</button>

                    {theme !== "dark" && <button className={headerDarkmodeMenuLightStyle} onClick={() => handleTheme()}><MdOutlineLightMode /></button>}
                    {theme === "dark" && <button className={headerDarkmodeMenuDarkStyle} onClick={() => handleTheme()}><MdOutlineNightlight /></button>}
                </div>
                <div className='display md:hidden'>
                    <button className={headerHamburgerMenuStyle} onClick={handleHamburgerMenuOpen}><RxHamburgerMenu /></button>
                </div>
            </div>
            {hamburgerMenuOpen && <div className='bg-lightPrimary dark:bg-darkPrimary md:hidden'>
                <div className={headerNavHamburgerStyle}>
                <button onClick={(e) => handleScrollTo(e, 'top', 'smooth', 'start')} id="top-btn" className={headerNavItemStyle}><RiHome2Line /></button>
                    <button onClick={(e) => handleScrollTo(e, 'projects', 'smooth', 'start')} id="projects-btn" className={headerNavItemStyle}>Projects</button>
                    <button onClick={(e) => handleScrollTo(e, 'stacks', 'smooth', 'start')} id="stacks-btn" className={headerNavItemStyle}>Stacks</button>
                    <button onClick={(e) => handleScrollTo(e, 'contact', 'smooth')} id="contact-btn" className={headerNavItemStyle}>Contact</button>
                    {theme !== "dark" && <button className={headerDarkmodeMenuLightStyle} onClick={() => handleTheme()}><MdOutlineLightMode /></button>}
                    {theme === "dark" && <button className={headerDarkmodeMenuDarkStyle} onClick={() => handleTheme()}><MdOutlineNightlight /></button>}
                </div>
            </div>}
        </div>
    );
};

export default Nav;
