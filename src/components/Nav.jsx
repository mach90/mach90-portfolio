import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../public/logo.svg'
import { MdOutlineLightMode } from 'react-icons/md';

function Nav() {
    const headerCoordsContainerStyle = "flex flex-row justify-between items-center border border-dark py-2 rounded-md px-4 bg-light mx-4 lg:mx-[10%] xl:mx-[20%] shadow-md";
    const headerCoordsStickyContainerStyle = "flex flex-row justify-between items-center border-b border-dark py-2 border-b border-black px-4 bg-light w-full sticky top-0 z-20 shadow-md";
    const headerCoordsLogoContainerStyle = "flex flex-row gap-4 items-center"
    const headerCoordsLogoStyle = "h-6 hover:cursor-triangle";
    const headerCoordsNameStyle = "font-heading uppercase font-black text-xl hover:cursor-triangle";
    const headerCoordsInfoStyle = "font-default text-md";
    const headerHamburgerMenuStyle = "text-textdark text-2xl hover:cursor-triangle";
    const headerDarkmodeMenuStyle = "text-textdark text-2xl hover:cursor-triangle";
    
    /* //////////////////////////////////////////////////
    SCROLL TRIGGER
    ////////////////////////////////////////////////// */
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= 420 && !triggered) {
                setTriggered(true);
            }

            if (scrollPosition < 400 && triggered) {
                setTriggered(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [triggered]);


    return (
        <>
            <div className={triggered ? headerCoordsStickyContainerStyle : headerCoordsContainerStyle}>
                <div className={headerCoordsLogoContainerStyle}>
                    <a href="https://mach90.netlify.app"><img src={Logo} alt="Mach logo" className={headerCoordsLogoStyle} /></a>
                    <a href="https://mach90.netlify.app"><p className={headerCoordsNameStyle}>mach90</p></a>
                </div>
                {/* <p className={headerCoordsInfoStyle}>Toulouse, France</p> */}
                <div className='hidden sm:flex flex-row gap-4 md:gap-8 lg:gap-12 font-bold font-heading text-sm md:text-lg lg:text-lg items-center'>
                    <a href="#projects" className="hover:cursor-triangle">Projects</a>
                    <a href="#technos" className="hover:cursor-triangle">Technos</a>
                    <a href="#contact" className="hover:cursor-triangle">Contact</a>
                    <button className={headerDarkmodeMenuStyle}><MdOutlineLightMode /></button>
                </div>
                <div className='block sm:hidden'>
                    <button className={headerHamburgerMenuStyle}><RxHamburgerMenu /></button>
                </div>
            </div>
        </>
    );
};

export default Nav;
