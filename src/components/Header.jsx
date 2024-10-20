/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import PortfolioSVG from "../img/portfolio.svg";
// import { FaGithub } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const headerContainerStyle = "px-4 pt-40 pb-24 lg:px-[10%] xl:px-[20%] flex flex-col gap-24 justify-center items-center bg-lightPrimary dark:bg-darkPrimary bg-opacity-0 dark:bg-opacity-70 h-screen";

const headerPortfolio = "w-full animate-fade-in fill-white";

// const headerDescriptionContainerStyle = "w-full grid grid-cols-3 gap-0";

// const headerDescriptionCardStyle = "w-full col-span-full md:col-span-1 flex flex-col gap-4 p-6 bg-lightPrimaryAccent dark:bg-darkPrimaryAccent order-2 md:order-1 justify-center border-b-8 border-lightSecondaryAccent dark:border-darkSecondaryAccent";
// const headerDescriptionCardTextStyle = "font-default font-bold text-lightSecondaryAccent dark:text-darkSecondaryAccent uppercase text-md lg:text-lg max-w-96";
// const headerEmStyle = "font-default font-normal text-lightSecondaryAccent dark:text-darkSecondaryAccent normal-case text-md lg:text-lg";
// const headerDescriptionCardTagsContainerStyle = "flex flex-row gap-2 font-heading uppercase font-bold text-sm text-accent text-lightPrimaryAccent dark:text-darkPrimaryAccent";
// const headerDescriptionTagStyle = "bg-lightSecondaryAccent dark:bg-darkSecondaryAccent px-2 py-1";

// const headerDescriptionProfileStyle = "w-full col-span-full md:col-span-2 bg-lightProfileCasual dark:bg-darkProfileCasual bg-cover bg-center flex flex-col gap-2 justify-end items-end font-default text-accent text-2xl p-4 min-h-60 order-1 md:order-2 ";

// const headerDescriptionProfileLinkStyle = "flex flex-row gap-1 px-2 py-1 justify-end items-center bg-lightPrimaryAccent  dark:bg-darkPrimaryAccent hover:bg-lightPrimary dark:hover:bg-darkPrimary text-lightSecondaryAccent dark:text-darkSecondaryAccent border-b-4 border-lightSecondaryAccent dark:border-darkSecondaryAccent font-medium text-xl rounded-xl";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
HEADER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Header() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            <header className={headerContainerStyle}>         
                <img id="portfolioSVG" src={PortfolioSVG} alt="Portfolio SVG" width="100%" className={headerPortfolio} />

                {/* <div className={headerDescriptionContainerStyle}>
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
                </div> */}
            </header>
        </>
    );
};

export default Header;
