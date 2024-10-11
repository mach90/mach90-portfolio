import { Fa500Px, FaArtstation, FaCodepen, FaDribbble, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaStackOverflow, FaTwitter, FaUnsplash, FaYoutube } from "react-icons/fa";
import EnveloppeSVG from "../img/enveloppe.svg";

export default function Footer() {
    const bill = import.meta.env.VITE_BILL;
    const gates = import.meta.env.VITE_GATES;
    const gmail = import.meta.env.VITE_GMAIL;

    const subject = encodeURIComponent("Portfolio");
    const body = encodeURIComponent("Hello, are you availaible ?");

    const footerStyle = "px-6 py-6 lg:px-[10%] xl:px-[20%] flex flex-col justify-between items-end bg-lightPrimary dark:bg-darkPrimary bg-opacity-80 dark:bg-opacity-90 text-lightSubheading dark:text-darkSubheading font-heading text-center h-screen";
    const footerContainerStyle = "flex flex-col justify-between items-center h-full w-full";
    
    const footerContainerUpperStyle = "flex flex-col gap-2 justify-center items-center h-full w-full font-black";
    const footerEnveloppe = "w-full h-full hover:scale-105 duration-200";

    const footerContainerLowerStyle = "flex flex-row gap-4 w-full justify-between border-t border-lightPrimaryBorder dark:border-darkPrimaryBorder pt-4";
    const footerCopyrightStyle = "text-sm font-bold"
    const socialsContainerStyle = "flex flew-col gap-4 text-md";
    const socialsItemStyle = "relative flex flex-col justify-center items-center text-lightText dark:text-darkText hover:scale-110 hover:brightness-50 dark:hover:brightness-150 duration-200";

    return (
        <>
            <footer id="contact" className={footerStyle}>
                <div className={footerContainerStyle}>
                    <div className={footerContainerUpperStyle}>
                        <p className="text-sm sm:text-md md:text-lg">Seeking a dedicated developer eager to grow?</p>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl z-10">Let's work together</h1>
                        <a href={`mailto:${bill}.${gates}@${gmail}.com?subject=${subject}&body=${body}`} className="w-40 lg:w-80 rounded-lg">
                            <img id="enveloppeSVG" src={EnveloppeSVG} alt="Enveloppe SVG" width="100%" className={footerEnveloppe}/>
                        </a>
                    </div>
                    <div className={footerContainerLowerStyle}>
                        <p className={footerCopyrightStyle}>© 2024 mach90</p>
                        <div className={socialsContainerStyle}>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaGithub /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaLinkedin /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaTwitter /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaStackOverflow /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaMedium /></a>
                            {/* <a href="#" target="_blank" className={socialsItemStyle}><FaYoutube /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaInstagram /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaDribbble /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaCodepen /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><Fa500Px /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaUnsplash /></a>
                            <a href="#" target="_blank" className={socialsItemStyle}><FaArtstation /></a> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
