export default function Footer() {
    const footerStyle = "px-6 py-6 lg:px-[10%] xl:px-[20%] flex flex-row justify-between items-end bg-lightPrimary dark:bg-darkPrimary text-lightSubheading dark:text-darkSubheading font-heading font-black text-md text-center h-screen";
    const contactContainerStyle = "flex flex-row gap-4";
    const contactMailStyle = "text-lightHeading dark:text-darkHeading";

    return (
        <>
            <footer id="contact" className={footerStyle}>
                <p>© 2024</p>
                <div className={contactContainerStyle}>
                    <p>Contact me</p>
                    <a className={contactMailStyle} href="mailto:john@doe.com?subject=Portfolio contact">nope at gmail</a>
                </div>
            </footer>
        </>
    );
}
