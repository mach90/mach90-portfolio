/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import stacksData from "../data/stacksData";
import { GiDiploma } from 'react-icons/gi';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STACKS COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Stacks() {
    /* //////////////////////////////////////////////////
    STYLES
    ////////////////////////////////////////////////// */
    const stacksContainerStyle = "px-[10%] xl:px-[20%] py-40 flex flex-col xl:flex-col gap-12 justify-center items-center bg-lightSecondary dark:bg-darkSecondary bg-opacity-100 dark:bg-opacity-100 border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder";
    const stacksTitleStyle = "font-heading px-6 py-2 rounded-full border-4 border-lightSecondaryBorder dark:border-darkSecondaryBorder uppercase text-center text-5xl font-black text-lightSubheading dark:text-darkSubheading w-max";
    const stacksSubtitleStyle = "font-default font-medium text-lg text-lightText dark:text-darkText";
    const stacksListsContainerStyle = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center w-full";
    const stacksListContainerStyle = "flex flex-col gap-2 w-full p-4 bg-lightPrimary dark:bg-darkPrimary shadow-sm border-0 border-lightSecondaryBorder dark:border-darkSecondaryBorder rounded-lg hover:scale-105 duration-300"
    const stacksListTitleStyle = "text-lightSubheading dark:text-darkSubheading uppercase font-heading font-black text-xl border-b border-lightSecondaryBorder dark:border-darkSecondaryBorder px-2 pb-2 text-center";
    const stacksListStyle = "text-lightSubheading dark:text-darkSubheading font-default font-medium flex flex-col gap-2 text-sm sm:text-lg lg:text-xl";
    const stacksListItemStyle = "flex flex-row gap-2 items-center px-2";
    const stacksListItemLogoStyle = "text-textlight w-4";
    const stacksListItemCertificationStyle = "hover:brightness-75 dark:hover:brightness-150 duration-200"
    
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <section id="stacks" className={stacksContainerStyle}>
            <h2 className={stacksTitleStyle}>Stacks</h2>
            <p className={stacksSubtitleStyle}>I use popular and reknown modern technologies and tools</p>
            <div className={stacksListsContainerStyle}>
                {stacksData.map((list, index) => (
                    <div className={stacksListContainerStyle} key={index}>
                        <h3 className={stacksListTitleStyle}>{list.listTitle}</h3>
                        <div className={stacksListStyle}>
                            {list.stacks.map((tech, techIndex) => (
                                <div className={stacksListItemStyle} key={techIndex}>
                                    <img src={tech.techLogo} alt={tech.techName} className={stacksListItemLogoStyle} />
                                    <p>{tech.techName}</p> 
                                    {tech.certification && <a href={tech.certification} target='_blank' className={stacksListItemCertificationStyle}><GiDiploma /></a>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stacks;
