import { useState } from "react";
import technologiesData from "../data/technologiesData";
import { FaSearch } from "react-icons/fa";

const searchContainerStyle = "flex flex-row gap-2 items-center font-default";
const searchIconStyle = "text-lightText dark:text-darkText";
const searchBarStyle = "w-full bg-lightPrimary text-lightText dark:bg-darkPrimary dark:text-darkText px-3 py-1 rounded-lg font-normal";

const listContainerStyle = "grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm md:text-lg w-full font-default text-lightText dark:text-darkText";
const listElementStyle = "font-medium text-center bg-lightPrimary dark:bg-darkPrimary";
const listElementHighlightedStyle = "font-medium text-center bg-lightValidation dark:bg-darkValidation text-lightPrimary dark:text-darkPrimary";


function SearchList() {
    const [filter, setFilter] = useState(null);

    function handleSetFilter(e){
        if(e.target.value === "") setFilter(null);
        if(e.target.value.length >= 2) setFilter(e.target.value.replace(/\s+/g, " ").toLowerCase().trim());
    };

    return (
        <>
            <div className={searchContainerStyle}>
                <FaSearch className={searchIconStyle} />
                <input type="text" name="search" placeholder="Search to highlight..." className={searchBarStyle} onChange={(e) => handleSetFilter(e)}/>
            </div>
            <div className={listContainerStyle}>
                {technologiesData.map(el => {
                    return <p className={el.title.toLowerCase().includes(filter) || el.tags.toLowerCase().includes(filter) ? listElementHighlightedStyle : listElementStyle} key={el.title}>{el.title}</p>
                })}            
            </div>
        </>
    );
};

export default SearchList;
