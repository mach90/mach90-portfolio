/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Logo from '../../public/logo.svg'
import { Github } from 'lucide-react';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
HEADER COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Header() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const headerContainerStyle = "mx-4 lg:mx-[10%] xl:mx-[20%] my-4 flex flex-col gap-2 justify-center items-center";

    const headerCoordsContainerStyle = "flex flex-row justify-center gap-8 sm:gap-24 items-center w-full";
    const headerCoordsLogoStyle = "h-6";
    const headerCoordsNameStyle = "font-heading uppercase font-black text-xl";
    const headerCoordsInfoStyle = "font-default text-md";
    
    const headerTitleStyle = "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase font-heading text-customColor1";

    const headerDescriptionContainerStyle = "w-full grid grid-cols-3 gap-2";

    const headerDescriptionCardStyle = "w-full col-span-full md:col-span-1 flex flex-col gap-4 p-6 bg-grainyLight";
    const headerDescriptionCardTextStyle = "font-default font-medium uppercase text-md lg:text-lg";
    const headerDescriptionCardTagsContainerStyle = "flex flex-row gap-2 font-heading uppercase font-bold text-textlight text-sm";
    const headerDescriptionTagStyle = "bg-dark px-2 py-1";

    const headerDescriptionProfileStyle = "w-full col-span-full md:col-span-2 bg-profileCasual bg-cover bg-center flex flex-col gap-2 justify-end items-end font-default text-textlight text-2xl p-4 min-h-60";
    const headerDescriptionProfileLinkStyle = "flex flex-row gap-1 justify-end items-center hover:underline";
    const headerDescriptionProfileLinkTextStyle = "";

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            <div className={headerContainerStyle}>

                <div className={headerCoordsContainerStyle}>
                    <img src={Logo} alt="Mach logo" className={headerCoordsLogoStyle} />
                    <p className={headerCoordsNameStyle}>mach90</p>
                    <p className={headerCoordsInfoStyle}>Toulouse, France</p>
                </div>
            
                <h1 className={headerTitleStyle}>PORTFOLIO</h1>

                <div className={headerDescriptionContainerStyle}>
                    <div className={headerDescriptionCardStyle}>
                        <p className={headerDescriptionCardTextStyle}>Creating web apps and websites. Principled and detail-oriented, valuing quality and security.</p>
                        <div className={headerDescriptionCardTagsContainerStyle}>
                            {/* <p className={headerDescriptionTagStyle}>Technicien</p> */}
                            <p className={headerDescriptionTagStyle}>Frontend</p>
                            <p className={headerDescriptionTagStyle}>3D</p>
                        </div>
                    </div>
                    <div className={headerDescriptionProfileStyle}>
                        <a href='https://github.com/mach90' target='_blank' className={headerDescriptionProfileLinkStyle}>
                            <Github />
                            <p className={headerDescriptionProfileLinkTextStyle}>mach90</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
