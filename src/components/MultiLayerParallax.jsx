import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import ParallaxClouds from "../img/parallax/parallax-clouds.avif";
import ParallaxPeaks from "../img/parallax/parallax-peaks.avif";
import ParallaxHills from "../img/parallax/parallax-hills.avif";
import ParallaxTrees from "../img/parallax/parallax-trees.avif";

function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ //gives us a value between 0 and 1 depending on the scroll Y progress
        target: ref, //what we are recording
        offset: ["start start", "end start"], //[starts when "element top intersects viewport top", ends when "element bottom intersects viewport top"]
    });
    const cloudsY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); //start at X% and ends at X% of the ref element height
    const peaksY = useTransform(scrollYProgress, [0, 1], ["50%", "10%"]);
    const hillsY = useTransform(scrollYProgress, [0, 1], ["130%", "30%"]);
    const treesY = useTransform(scrollYProgress, [0, 1], ["180%", "40%"]);

    return (
        <div ref={ref} className="fixed w-full h-[3000%] sm:h-[2000%] md:h-[300%] xl:h-[100%] overflow-hidden z-[-100]">

            <motion.img 
                id="parallax-clouds" 
                src={ParallaxClouds} 
                alt="Parallax Clouds" 
                className="absolute inset-0 z-[-90] bg-cover bg-top bg-no-repeat" 
                style={{
                    y: cloudsY,
                }}
            />

            <motion.img 
                id="parallax-peaks" 
                src={ParallaxPeaks} 
                alt="Parallax Peaks" 
                className="absolute inset-0 z-[-80] bg-cover bg-top bg-no-repeat" 
                style={{
                    y: peaksY,
                }}
            />

            <motion.img 
                id="parallax-hills" 
                src={ParallaxHills} 
                alt="Parallax Hills" 
                className="absolute inset-0 z-[-70] bg-cover bg-top bg-no-repeat" 
                style={{
                    y: hillsY,
                }}
            />

            <motion.img 
                id="parallax-trees" 
                src={ParallaxTrees} 
                alt="Parallax Trees" 
                className="absolute inset-0 z-[-60] bg-cover bg-top bg-no-repeat" 
                style={{
                    y: treesY,
                }}
            />

        </div>
    );
};

export default MultiLayerParallax;

/*
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ //gives us a value between 0 and 1 depending on the scroll Y progress
        target: ref, //what we are recording
        offset: ["start start", "end start"], //[starts when "element top intersects viewport top", ends when "element bottom intersects viewport top"]
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-content-center">
            <motion.div className="absolute inset-0 z-0" style={{
                backgroundImage: 'url(/image-full.png)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                y: backgroundY,
            }}>
            </motion.div>
            <motion.h1 className="font-bold text-black text-7xl md:text-9xl relative z-10" style={{
                y: textY
            }}>
                PARALLAX
            </motion.h1>
            <div className="absolute inset-0 z-20" style={{
                backgroundImage: 'url(/image-bottom.png)',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                }}>
            </div>
        </div>
    );
};

export default MultiLayerParallax;
*/
