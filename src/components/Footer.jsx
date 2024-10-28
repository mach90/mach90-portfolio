/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import Spline from '@splinetool/react-spline';
/* //////////////////////////////////////////////////
ICONS
////////////////////////////////////////////////// */
import { Fa500Px, FaArtstation, FaCodepen, FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaStackOverflow, FaTwitter, FaUnsplash, FaYoutube } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdOutlinePhoneAndroid } from "react-icons/md";
// import { IoChatboxEllipses } from "react-icons/io5";
import { SiCodewars } from "react-icons/si";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const footerContainerStyle = "px-6 lg:px-[10%] xl:px-[20%] pt-40 pb-6 flex flex-col justify-end items-end bg-lightPrimary dark:bg-darkPrimary bg-opacity-100 dark:bg-opacity-100 text-lightSubheading dark:text-darkSubheading font-heading text-center min-h-screen";

const footerContainerUpperStyle = "flex flex-col gap-6 justify-center items-center w-full font-black";

const footerHeyContainerStyle = "gap-4 p-0 w-full flex flex-col justify-center items-center";
const footerHeyTitleStyle = "text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-lightHeading dark:text-darkHeading max-w-xl xl:max-w-3xl";
const footerHeySubtitleStyle = "text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-lightSubheading dark:text-darkSubheading max-w-xl xl:max-w-2xl";
// const footerContactContainerStyle = "grid grid-rows-2 justify-center items-center bg-lightSecondary dark:bg-darkSecondary p-4 rounded-lg border-b-8 border-lightValidation dark:border-darkValidation";
// const footerContactIconStyle = "text-5xl pb-3 w-full";
// const footerContactIconAnimateStyle = "hover:scale-110 duration-200";
// const footerContactTitleStyle = "text-xs sm:text-md pt-2 border-t border-lightSecondaryBorder dark:border-darkSecondaryBorder text-lightValidation dark:text-darkValidation";
// const footerContactSubtitleStyle = "text-xs sm:text-sm font-normal";

const footerSplineContainerStyle = "flex justify-end items-end w-[260px] h-[500px] cursor-none mb-12";

const footerContainerLowerStyle = "flex flex-row gap-4 w-full justify-between border-t border-lightPrimaryBorder dark:border-darkPrimaryBorder pt-4 z-10 text-sm md:text-lg lg:text-xl xl:text-xl lg:text-lg";
const footerCopyrightStyle = "font-bold"
const socialsContainerStyle = "flex flew-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-md";
const socialsItemStyle = "relative flex flex-col justify-center items-center text-lightText dark:text-darkText hover:scale-110 hover:brightness-50 dark:hover:brightness-150 duration-200";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
FOOTER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Footer() {
    /* //////////////////////////////////////////////////
    ENV
    ////////////////////////////////////////////////// */
    // const bill = import.meta.env.VITE_BILL;
    // const gates = import.meta.env.VITE_GATES;
    // const gmail = import.meta.env.VITE_GMAIL;

    /* //////////////////////////////////////////////////
    MAIL
    ////////////////////////////////////////////////// */
    // const subject = encodeURIComponent("Portfolio");
    // const body = encodeURIComponent("Hello, are you available ?");

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <>
            <footer id="contact" className={footerContainerStyle}>
                <div className={footerContainerUpperStyle}>
                    <div className={footerHeyContainerStyle}>
                        <p className={footerHeySubtitleStyle}>Seeking a dedicated developer eager to grow?</p>
                        <h1 className={footerHeyTitleStyle}>Let's work together</h1>
                        {/* <div className="grid grid-cols-3 gap-4">
                            <div className={footerContactContainerStyle}>
                                <FaLocationDot className={footerContactIconStyle} />
                                <p className={footerContactTitleStyle}>Toulouse</p>
                                <p className={footerContactSubtitleStyle}>France</p>
                            </div>
                            <div className={footerContactContainerStyle}>
                                <a href={`mailto:${bill}${gates}@${gmail}.com?subject=${subject}&body=${body}`} ><IoChatboxEllipses className={`${footerContactIconStyle} + ${footerContactIconAnimateStyle}`} /></a>
                                <p className={footerContactTitleStyle}>{`${bill}${gates} at ${gmail}.com`}</p>
                                <p className={footerContactSubtitleStyle}>I read all my mails</p>
                            </div>
                            <div className={footerContactContainerStyle}>
                                <MdOutlinePhoneAndroid className={footerContactIconStyle} />
                                <p className={footerContactTitleStyle}>+33 6 12 34 56 78</p>
                                <p className={footerContactSubtitleStyle}>Leave a message</p>
                            </div>
                        </div> */}
                    </div>
                    <div className={footerSplineContainerStyle}>
                        <Spline scene="https://prod.spline.design/RZx1IDcCG4R8HrYU/scene.splinecode" />
                    </div>
                </div>
                <div className={footerContainerLowerStyle}>
                    <p className={footerCopyrightStyle}>© 2024 mach90</p>
                    <div className={socialsContainerStyle}>
                        <a href="https://github.com/mach90" target="_blank" className={socialsItemStyle}><FaGithub /></a>
                        {/* <a href="#" target="_blank" className={socialsItemStyle}><FaLinkedin /></a> */}
                        {/* <a href="#" target="_blank" className={socialsItemStyle}><FaTwitter /></a> */}
                        {/* <a href="https://stackoverflow.com/users/27854084" target="_blank" className={socialsItemStyle}><FaStackOverflow /></a> */}
                        {/* <a href="medium.com/@mach90" target="_blank" className={socialsItemStyle}><FaMedium /></a> */}
                        {/* <a href="#" target="_blank" className={socialsItemStyle}><FaYoutube /></a> */}
                        {/* <a href="#" target="_blank" className={socialsItemStyle}><FaInstagram /></a> */}
                        {/* <a href="https://dribbble.com/mach90" target="_blank" className={socialsItemStyle}><FaDribbble /></a> */}
                        <a href="https://codepen.io/mach90" target="_blank" className={socialsItemStyle}><FaCodepen /></a>
                        <a href="https://www.codewars.com/users/mach90" target="_blank" className={socialsItemStyle}><SiCodewars /></a>
                        <a href="https://unsplash.com/@mach90" target="_blank" className={socialsItemStyle}><FaUnsplash /></a>
                        {/* <a href="#" target="_blank" className={socialsItemStyle}><Fa500Px /></a> */}
                        {/* <a href="https://www.artstation.com/user-7925428" target="_blank" className={socialsItemStyle}><FaArtstation /></a> */}
                    </div>
                </div>
            </footer>
        </>
    );
}