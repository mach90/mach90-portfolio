/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../public/logo.svg'
import PortfolioLargeSVG from "../img/portfolio.svg";
import PortfolioSmallSVG from "../img/portfolio-s.svg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
HEADER COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Header() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const headerContainerStyle = "mx-4 lg:mx-[10%] xl:mx-[20%] flex flex-col gap-4 justify-center items-center pt-12";

    const headerCoordsContainerStyle = "flex flex-row justify-between sm:gap-24 items-center w-full border-b border-dark py-2 border border-black rounded-md px-4 bg-light";
    const headerCoordsLogoContainerStyle = "flex flex-row gap-4 items-center"
    const headerCoordsLogoStyle = "h-6";
    const headerCoordsNameStyle = "font-heading uppercase font-black text-xl";
    const headerCoordsInfoStyle = "font-default text-md";
    
    // const headerTitleStyle = "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase font-heading text-customColor1";
    const headerPortfolioLarge = "w-full hidden xl:block";
    const headerPortfolioSmall = "w-full block xl:hidden";


    const headerDescriptionContainerStyle = "w-full grid grid-cols-3 gap-0 rounded-md";

    const headerDescriptionCardStyle = "w-full col-span-full md:col-span-1 flex flex-col gap-4 p-6 bg-dark order-2 rounded-b-md md:rounded-l-md md:rounded-r-none md:order-1 justify-center";
    const headerDescriptionCardTextStyle = "font-default font-medium text-textlight uppercase text-md lg:text-lg";
    const headerEmStyle = "font-default font-thin text-textlight normal-case text-md lg:text-lg";
    const headerDescriptionCardTagsContainerStyle = "flex flex-row gap-2 font-heading uppercase font-bold text-textlight text-sm";
    const headerDescriptionTagStyle = "bg-accent px-2 py-1 text-textdark";

    const headerDescriptionProfileStyle = "w-full col-span-full md:col-span-2 bg-profileCasual bg-cover bg-center flex flex-col gap-2 justify-end items-end font-default text-accent text-2xl p-4 min-h-60 order-1 rounded-t-md md:rounded-r-md md:rounded-l-none md:order-2";
    const headerDescriptionProfileLinkStyle = "flex flex-row gap-1 justify-end items-center hover:text-textlight";
    const headerDescriptionProfileLinkTextStyle = "";

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            <header className={headerContainerStyle}>

                <div className={headerCoordsContainerStyle}>
                    <div className={headerCoordsLogoContainerStyle}>
                        <a href="https://mach90.netlify.app"><img src={Logo} alt="Mach logo" className={headerCoordsLogoStyle} /></a>
                        <p className={headerCoordsNameStyle}>mach90</p>
                    </div>
                    <a href="#" target="_blank"><RxHamburgerMenu /></a>
                    <p className={headerCoordsInfoStyle}>Toulouse, France</p>
                </div>
            
                {/* <h1 className={headerTitleStyle}>PORTFOLIO</h1> */}
                <img id="portfolio" src={PortfolioLargeSVG} alt="PortfolioLargeSVG" width="100%" className={headerPortfolioLarge}/>
                <img id="portfolio" src={PortfolioSmallSVG} alt="PortfolioSmallSVG" width="100%" className={headerPortfolioSmall}/>

                <div className={headerDescriptionContainerStyle}>
                    <div className={headerDescriptionCardStyle}>
                        <p className={headerDescriptionCardTextStyle}>I craft web apps and websites, that I intend to be purposeful and immersive. <em className={headerEmStyle}>Principled and detail-oriented, valuing quality and security.</em></p>
                        <div className={headerDescriptionCardTagsContainerStyle}>
                            {/* <p className={headerDescriptionTagStyle}>Technicien</p> */}
                            <p className={headerDescriptionTagStyle}>Frontend</p>
                            <p className={headerDescriptionTagStyle}>3D</p>
                        </div>
                    </div>
                    <div className={headerDescriptionProfileStyle}>
                        <a href='https://github.com/mach90' target='_blank' className={headerDescriptionProfileLinkStyle}>
                            <FaGithub />
                            <p className={headerDescriptionProfileLinkTextStyle}>mach90</p>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
