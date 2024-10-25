/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
IMAGES
////////////////////////////////////////////////// */
import TravelFormGenerator from "../img/projects/perso/P0316-travel-plan-form-thumbnail.avif";
import BentoEnviro from "../img/projects/perso/P0330-bento-enviro-thumbnail.avif";
import PrimusLitePlus from "../img/projects/perso/prime-lite-plus.webflow.io-thumbnail.avif";
import PigGame from "../img/projects/formation/P0202-pig-game-thumbnail.avif";
import UnderscoreToCamel from "../img/projects/formation/P0203-underscore2camel-thumbnail.avif";
import GuessMyNumber from "../img/projects/formation/P0208-guess-my-number-thumbnail.avif";
import Bankist from "../img/projects/formation/P0210-bankist-thumbnail.avif";
import PizzaMenu from "../img/projects/formation/P0301-pizza-menu-thumbnail.avif";
import TravelList from "../img/projects/formation/P0305-travel-list-thumbnail.avif";
import TipCalculator from "../img/projects/formation/P0308-tip-calculator-thumbnail.avif";
import EatNSplit from "../img/projects/formation/P0309-eat-n-split-thumbnail.avif";
import UsePopcorn from "../img/projects/formation/P0310-usepopcorn-thumbnail.avif";
import ReactQuiz from "../img/projects/formation/P0317-react-quiz-thumbnail.avif";
import Worldwise from "../img/projects/formation/P0319-worldwise-thumbnail.avif";
import FastReactPizza from "../img/projects/formation/P0323-fast-react-pizza-thumbnail.avif";
import TheWildOasis from "../img/projects/formation/P0324-the-wild-oasis-thumbnail.avif";
import LiveryPA24Braniff from "../img/projects/creative/livery-pa24-braniff.avif"

/* //////////////////////////////////////////////////
VIDEOS
////////////////////////////////////////////////// */
import BentoEnviroMP4 from "../video/bentoenviro.mp4";
import TfGenMP4 from "../video/tfgen.mp4";
import PrimusLitePlusMP4 from "../video/primusliteplus.mp4";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROJECTS LIST DATA
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const projectsList = [
    {
        title: "Travel Form Generator",
        status: "In development",
        version: "0.1.0",
        description: "A web form that converts user input into a formatted and printable Travel Form (.pdf) using React-pdf library.",
        type: ["All projects", "Apps"],
        techs: ["React", "Tailwind", "React-pdf", "Spline", "Blender"],
        thumbnail: TravelFormGenerator,
        video: TfGenMP4,
        showcased: true,
        link: "https://travelformgenerator.netlify.app/",
        github: "https://github.com/mach90/TFgen",
    },
    {
        title: "Bento Enviro",
        status: "In development",
        version: "0.1.0",
        description: "Aggregating diverse environmental data from multiple APIs and presenting it through a concise Bento-style UI.",
        type: ["All projects", "Apps"],
        techs: ["React", "Tailwind"],
        thumbnail: BentoEnviro,
        video: BentoEnviroMP4,
        showcased: true,
        link: "https://bento-enviro.netlify.app/",
        github: "https://github.com/mach90/bento-enviro",

    },
    {
        title: "Primus stove showcase",
        status: "In development",
        version: "0.1.0",
        description: "Transformed a Primus stove e-commerce product page into a product showcase on Webflow, preserving the brand's visual identity while enhancing the presentation.",
        type: ["All projects", "Websites"],
        techs: ["Webflow", "Figma", "Spline", "Blender"],
        thumbnail: PrimusLitePlus,
        video: PrimusLitePlusMP4,
        showcased: true,
        link: "https://prime-lite-plus.webflow.io/",
        github: "",
    },
    {
        title: "The Wild Oasis",
        status: "In development",
        version: "0.1.0",
        description: "Frontend/Backend hotel management app.",
        type: ["All projects", "Apps"],
        techs: ["React", "Supabase"],
        thumbnail: TheWildOasis,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "usePopcorn",
        status: "Finished",
        version: "0.1.0",
        description: "Search, rate and add movies to your watchlist.",
        type: ["All projects", "Apps"],
        techs: ["React"],
        thumbnail: UsePopcorn,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Bankist",
        status: "Finished",
        version: "0.1.0",
        description: "Bank account interface with transactions.",
        type: ["All projects", "Apps"],
        techs: ["JavaScript"],
        thumbnail: Bankist,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Fast React Pizza",
        status: "Finished",
        version: "0.1.0",
        description: "Pizza shop app.",
        type: ["All projects", "Apps"],
        techs: ["React"],
        thumbnail: FastReactPizza,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Travel List",
        status: "Finished",
        version: "0.1.0",
        description: "Simple backpack gear list.",
        type: ["All projects", "Apps"],
        techs: ["React"],
        thumbnail: TravelList,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Worldwise",
        status: "Finished",
        version: "0.1.0",
        description: "Map app to keep track of your travel locations, using Leaflet.",
        type: ["All projects", "Apps"],
        techs: ["React"],
        thumbnail: Worldwise,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Eat'n'Split",
        status: "Finished",
        version: "0.1.0",
        description: "Small app to keep track of how much you and your friends owe each others.",
        type: ["All projects", "Tools", "Apps"],
        techs: ["React"],
        thumbnail: EatNSplit,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "React Quiz",
        status: "Finished",
        version: "0.1.0",
        description: "Small quizz about React.",
        type: ["All projects", "Games"],
        techs: ["React"],
        thumbnail: ReactQuiz,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Pizza Menu",
        status: "Finished",
        version: "0.1.0",
        description: "Pizza menu depending on hour and availability of meal.",
        type: ["All projects", "Websites", "Apps"],
        techs: ["React"],
        thumbnail: PizzaMenu,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Tip Calculator",
        status: "Finished",
        version: "0.1.0",
        description: "Simply calculate how much you should tip.",
        type: ["All projects", "Tools"],
        techs: ["React"],
        thumbnail: TipCalculator,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Guess my number",
        status: "Finished",
        version: "0.1.0",
        description: "Classic Guess my number game.",
        type: ["All projects", "Games"],
        techs: ["JavaScript"],
        thumbnail: GuessMyNumber,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Pig Game",
        status: "Finished",
        version: "0.1.0",
        description: "A simple pig game.",
        type: ["All projects", "Games"],
        techs: ["JavaScript"],
        thumbnail: PigGame,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "Underscore to camelCase",
        status: "Finished",
        version: "0.1.0",
        description: "under_score to camelCase converter.",
        type: ["All projects", "Tools"],
        techs: ["JavaScript"],
        thumbnail: UnderscoreToCamel,
        video: "",
        showcased: false,
        link: "",
        github: "",
    },
    {
        title: "PA24 Braniff livery",
        status: "Finished",
        version: "0.1.0",
        description: "Braniff livery for PA24.",
        type: ["Creative"],
        techs: ["GIMP"],
        thumbnail: LiveryPA24Braniff,
        video: "",
        showcased: false,
        link: "https://flightsim.to/file/73401/a2a-pa24-comanche-250-livery-braniff01",
        github: "",
    },
];

export default projectsList;