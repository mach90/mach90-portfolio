/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { useState, useRef, useEffect } from "react";
import projectsData from "../data/projectsData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const carouselContainerStyle = "w-full h-max flex flex-col gap-12 gap-40";

const carouselSliderStyle = "flex flex-row justify-center rotate-90 md:rotate-0";
const carouselSlideLeftStyle = "bg-neutral-800 p-1 rounded-lg w-full md:w-96 h-max md:scale-[120%] opacity-50";
const carouselSlideCenterStyle = "bg-neutral-800 p-1 rounded-lg w-full md:w-96 h-max scale-[300%] md:scale-[260%] lg:scale-[220%] opacity-100 shadow-lg z-10";
const carouselSlideRightStyle = "bg-neutral-800 p-1 rounded-lg w-full md:w-96 h-max md:scale-[120%] opacity-50";

const carouselPaginationStyle = "flex justify-center gap-4";
const carouselPaginationButtonStyle = "text-4xl text-lightText dark:text-darkText hover:brightness-50 dark:hover:brightness-150";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CAROUSEL COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function Carousel() {
    /* //////////////////////////////////////////////////
    DATA 
    ////////////////////////////////////////////////// */
    const showcasedProjects = projectsData.filter((proj) => proj.showcased === true).map((proj, i) => {return {id: i, title: proj.title, thumbnail: proj.thumbnail, video: proj.video}});

    /* //////////////////////////////////////////////////
    STATE
    ////////////////////////////////////////////////// */
    const [leftSlide, setLeftSlide] = useState(showcasedProjects.at(-1).id);
    const [centerSlide, setCenterSlide] = useState(showcasedProjects.at(0).id);
    const [rightSlide, setRightSlide] = useState(showcasedProjects.at(1).id);

    /* //////////////////////////////////////////////////
    RELOAD THE VIDEO
    ////////////////////////////////////////////////// */
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // Reload the video when the source changes
        }
    }, [centerSlide]);

    /* //////////////////////////////////////////////////
    FUNCTIONS
    ////////////////////////////////////////////////// */
    function handlePreviousSlide() {
        /* LEFT SLIDE */
        leftSlide === 0 ? setLeftSlide(showcasedProjects.at(-1).id) : setLeftSlide(leftSlide - 1);

        /* CENTER SLIDE */
       centerSlide === 0 ? setCenterSlide(showcasedProjects.at(-1).id) : setCenterSlide(centerSlide - 1);

        /* RIGHT SLIDE */
        rightSlide === 0 ? setRightSlide(showcasedProjects.at(-1).id) : setRightSlide(rightSlide - 1);
    }

    function handleNextSlide() {
        /* LEFT SLIDE */
        leftSlide === showcasedProjects.at(-1).id ? setLeftSlide(showcasedProjects.at(0).id) :  setLeftSlide(leftSlide + 1);

        /* CENTER SLIDE */
        centerSlide === showcasedProjects.at(-1).id ? setCenterSlide(showcasedProjects.at(0).id) : setCenterSlide(centerSlide + 1);

        /* RIGHT SLIDE */
        rightSlide === showcasedProjects.at(-1).id ? setRightSlide(showcasedProjects.at(0).id) : setRightSlide(rightSlide + 1);
    }

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div id="carousel" className={carouselContainerStyle}>
            <div id="carousel-slider" className={carouselSliderStyle}>
                <div id="carousel-slide-left" className={carouselSlideLeftStyle} onClick={handlePreviousSlide}>
                    <video poster={showcasedProjects.at(leftSlide).thumbnail}><source src={showcasedProjects.at(leftSlide).video} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>

                <div id="carousel-slide-center" className={carouselSlideCenterStyle}>
                    {/* <img src={showcasedProjects.at(centerSlide).thumbnail} /> */}
                    <video ref={videoRef} autoPlay loop muted playsInline poster={showcasedProjects.at(centerSlide).thumbnail}><source src={showcasedProjects.at(centerSlide).video} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>

                <div id="carousel-slide-right" className={carouselSlideRightStyle} onClick={handleNextSlide}>
                    <video poster={showcasedProjects.at(rightSlide).thumbnail}><source src={showcasedProjects.at(rightSlide).video} type="video/mp4" />Your browser does not support the video tag.</video>
                </div>
            </div>

            <div id="carousel-pagination" className={carouselPaginationStyle}>
                <button id="carousel-btn-left" className={carouselPaginationButtonStyle} onClick={handlePreviousSlide}><FaArrowAltCircleLeft /></button>
                <button id="carousel-btn-right" className={carouselPaginationButtonStyle} onClick={handleNextSlide}><FaArrowAltCircleRight /></button>
            </div>
        </div>
    );
};

export default Carousel;