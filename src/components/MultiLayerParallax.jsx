/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* //////////////////////////////////////////////////
IMAGES
////////////////////////////////////////////////// */
import ParallaxClouds from "../img/parallax/parallax-clouds.avif";
import ParallaxPeaks from "../img/parallax/parallax-bottom.avif";
// import ParallaxHills from "../img/parallax/parallax-hills.svg";
// import ParallaxTrees from "../img/parallax/parallax-trees.svg";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
MULTILAYER PARALLAX COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ //gives us a value between 0 and 1 depending on the scroll Y progress
        target: ref, //what we are recording
        offset: ["start start", "end start"], //[starts when "element top intersects viewport top", ends when "element bottom intersects viewport top"]
    });
    const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); //start at X% and ends at X% of the ref element height
    const peaksY = useTransform(scrollYProgress, [0, 1], ["30%", "10%"]);
    // const hillsY = useTransform(scrollYProgress, [0, 1], ["130%", "30%"]);
    // const treesY = useTransform(scrollYProgress, [0, 1], ["180%", "40%"]);

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div ref={ref} className="fixed w-full h-full overflow-hidden z-[-100]">

            <motion.img 
                id="parallax-clouds" 
                src={ParallaxClouds} 
                alt="Parallax Clouds" 
                className="absolute inset-0 z-[-90] bg-cover bg-top bg-no-repeat w-full" 
                style={{
                    y: cloudsY,
                }}
            />

            <motion.img 
                id="parallax-peaks" 
                src={ParallaxPeaks} 
                alt="Parallax Peaks" 
                className="absolute inset-0 z-[-80] bg-cover bg-top bg-no-repeat w-full" 
                style={{
                    y: peaksY,
                }}
            />

            {/* <motion.img 
                id="parallax-hills" 
                src={ParallaxHills} 
                alt="Parallax Hills" 
                className="absolute inset-0 z-[-70] bg-cover bg-top bg-no-repeat w-full" 
                style={{
                    y: hillsY,
                }}
            /> */}

            {/* <motion.img 
                id="parallax-trees" 
                src={ParallaxTrees} 
                alt="Parallax Trees" 
                className="absolute inset-0 z-[-60] bg-cover bg-top bg-no-repeat w-full" 
                style={{
                    y: treesY,
                }}
            /> */}

        </div>
    );
};

export default MultiLayerParallax;
