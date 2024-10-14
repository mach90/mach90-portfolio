/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import projectsData from "../data/projectsData";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CAROUSEL COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Carousel() {
    return (
        <div className="grid grid-cols-2 gap-8">
            {
                projectsData.filter((proj) => proj.showcased === true).map((proj, index) => {
                    return <video key={index} autoPlay loop muted playsInline poster={proj.thumbnail} className="col-span-full"><source src={proj.video} type="video/mp4" />Your browser does not support the video tag.</video>
                })
            }
        </div>
    );
};

export default Carousel;