import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../public/logo.svg'

function Nav() {
    const headerCoordsContainerStyle = "flex flex-row justify-between sm:gap-24 items-center border-b border-dark py-2 border-2 border-black rounded-md px-4 bg-light mx-4 lg:mx-[10%] xl:mx-[20%]";
    const headerCoordsStickyContainerStyle = "flex flex-row justify-between sm:gap-24 items-center border-b-2 border-dark py-2 border-b border-black px-4 bg-light w-full sticky top-0 z-10";
    const headerCoordsLogoContainerStyle = "flex flex-row gap-4 items-center"
    const headerCoordsLogoStyle = "h-6";
    const headerCoordsNameStyle = "font-heading uppercase font-black text-xl";
    const headerCoordsInfoStyle = "font-default text-md";
    const headerHamburgerMenuStyle = "text-textdark text-2xl";
    
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
                    <p className={headerCoordsNameStyle}>mach90</p>
                </div>
                {/* <p className={headerCoordsInfoStyle}>Toulouse, France</p> */}
                <a href="#" target="_blank" className={headerHamburgerMenuStyle}><RxHamburgerMenu /></a>
            </div>
        </>
    );
};

export default Nav;
