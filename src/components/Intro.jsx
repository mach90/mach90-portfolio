/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import Paragraph from "./Paragraph";
import { FaGithub } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const introContainerStyle = "px-[10%] xl:px-[20%] py-40 bg-lightPrimary dark:bg-darkPrimary text-lightText dark:text-darkText border-t border-lightPrimaryBorder dark:border-darkPrimaryBorder flex flex-col gap-24 justify-center items-center";

const headerDescriptionContainerStyle = "relative w-full max-w-3xl";

const headerDescriptionCardStyle = "absolute h-full w-max flex flex-col gap-4 p-6 justify-center border-b-8 border-lightSecondaryAccent dark:border-darkSecondaryAccent";
const headerDescriptionCardTextStyle = "font-default font-bold text-lightSecondaryAccent dark:text-darkSecondaryAccent uppercase text-md lg:text-lg max-w-96";
const headerEmStyle = "font-default font-normal text-lightSecondaryAccent dark:text-darkSecondaryAccent normal-case text-md lg:text-lg";
const headerDescriptionCardTagsContainerStyle = "flex flex-row gap-2 font-heading uppercase font-bold text-sm text-accent text-lightPrimaryAccent dark:text-darkPrimaryAccent";
const headerDescriptionTagStyle = "bg-lightSecondaryAccent dark:bg-darkSecondaryAccent px-2 py-1";

const headerDescriptionProfileStyle = "w-full bg-lightProfileCasual dark:bg-darkProfileCasual bg-cover bg-center flex flex-col gap-2 justify-end items-end font-default text-accent text-2xl p-4 min-h-60 border-b-8 border-lightSecondaryAccent dark:border-darkSecondaryAccent";

const headerDescriptionProfileLinkStyle = "flex flex-row gap-1 px-2 py-1 justify-end items-center bg-lightPrimaryAccent  dark:bg-darkPrimaryAccent hover:bg-lightPrimary dark:hover:bg-darkPrimary text-lightSecondaryAccent dark:text-darkSecondaryAccent border-b-4 border-lightSecondaryAccent dark:border-darkSecondaryAccent font-medium text-xl rounded-xl";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PARAGRAPH
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const paragraph = "❝ On a journey to create purposeful, interactive and immersive web apps, sites and experiences. ❞"

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
INTRO COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Intro() {
    return (
        <div id="intro" className={introContainerStyle}>
            <Paragraph paragraph={paragraph}/>
            <div className={headerDescriptionContainerStyle}>
                <div className={headerDescriptionCardStyle}>
                    <p className={headerDescriptionCardTextStyle}>Principled and detail-oriented, valuing quality and security.</p>
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
        </div>
    );
};

export default Intro;
