export default function Footer() {
    const footerStyle = "px-4 lg:px-[10%] xl:px-[20%] flex flex-row justify-between bg-dark text-textmedium font-heading font-black text-md text-center p-6";
    const contactContainerStyle = "flex flex-row gap-4";

    return (
        <>
            <footer id="contact" className={footerStyle}>
                <p>© 2024</p>
                <div className={contactContainerStyle}>
                    <p>Contact me</p>
                    <a className="text-textlight cursor-triangle" href="mailto:john@doe.com?subject=Portfolio contact">nope at gmail</a>
                </div>
            </footer>
        </>
    );
}
