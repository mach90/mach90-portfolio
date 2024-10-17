/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLES
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const paragraphStyle = "flex text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-normal italic leading-none text-lightText flex-wrap max-w-3xl justify-center";
const wordStyle = "relative mr-3 mt-3";
const shadowStyle = "absolute opacity-20";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
INTRO COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
        ref={container}         
        className={paragraphStyle}
        >
        {
        words.map( (word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
        }
    </p>
  )
}

const Word = ({children, progress, range}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className={wordStyle}>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className={shadowStyle}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}