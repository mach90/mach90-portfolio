/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { FaGithub } from "react-icons/fa";
import PortfolioLargeSVG from "../img/portfolio.svg";
import PortfolioSmallSVG from "../img/portfolio-s.svg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
HEADER COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
function Header() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const headerContainerStyle = "mx-4 lg:mx-[10%] xl:mx-[20%] flex flex-col gap-4 justify-center items-center mt-8";

    const headerPortfolioLarge = "w-full hidden xl:block";
    const headerPortfolioSmall = "w-full block xl:hidden";


    const headerDescriptionContainerStyle = "w-full grid grid-cols-3 gap-0 shadow-md";

    const headerDescriptionCardStyle = "w-full col-span-full md:col-span-1 flex flex-col gap-4 p-6 bg-dark order-2 rounded-b-md md:rounded-l-md md:rounded-r-none md:order-1 justify-center border border-dark";
    const headerDescriptionCardTextStyle = "font-default font-medium text-textlight uppercase text-md lg:text-lg";
    const headerEmStyle = "font-default font-thin text-textlight normal-case text-md lg:text-lg";
    const headerDescriptionCardTagsContainerStyle = "flex flex-row gap-2 font-heading uppercase font-bold text-textlight text-sm";
    const headerDescriptionTagStyle = "bg-dark border border-accent rounded-sm px-2 py-1 text-accent";

    const headerDescriptionProfileStyle = "w-full col-span-full md:col-span-2 bg-profileCasual bg-cover bg-center flex flex-col gap-2 justify-end items-end font-default text-accent text-2xl p-4 min-h-60 order-1 rounded-t-md md:rounded-r-md md:rounded-l-none md:order-2  border border-dark";

    const headerDescriptionProfileLinkStyle = "flex flex-row gap-1 px-2 py-1 justify-end items-center bg-accent text-textdark hover:bg-light rounded-md font-medium text-xl hover:cursor-triangle";

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            <header className={headerContainerStyle}>         
                <img id="portfolio-large" src={PortfolioLargeSVG} alt="PortfolioLargeSVG" width="100%" className={headerPortfolioLarge}/>
                <img id="portfolio-small" src={PortfolioSmallSVG} alt="PortfolioSmallSVG" width="100%" className={headerPortfolioSmall}/>

                <div className={headerDescriptionContainerStyle}>
                    <div className={headerDescriptionCardStyle}>
                        <p className={headerDescriptionCardTextStyle}>I craft web apps and websites, that I intend to be purposeful and immersive. <em className={headerEmStyle}>Principled and detail-oriented, valuing quality and security.</em></p>
                        <div className={headerDescriptionCardTagsContainerStyle}>
                            <p className={headerDescriptionTagStyle}>Frontend</p>
                            <p className={headerDescriptionTagStyle}>3D</p>
                            <p className={headerDescriptionTagStyle}>Graphics</p>
                        </div>
                    </div>
                    <div className={headerDescriptionProfileStyle}>
                        <a href='https://github.com/mach90' target='_blank' className={headerDescriptionProfileLinkStyle}>
                            <FaGithub />
                            <p>mach90</p>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
