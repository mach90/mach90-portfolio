/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
IMAGES - SCREENSHOTS (full resolution)
////////////////////////////////////////////////// */
import TravelFormGenerator from "../img/projects/perso/P0316-travel-plan-form.avif";
import BentoEnviro from "../img/projects/perso/P0330-bento-enviro.avif";
import PrimusLitePlus from "../img/projects/perso/prime-lite-plus.webflow.io.avif";
import PigGame from "../img/projects/formation/P0202-pig-game.avif";
import UnderscoreToCamel from "../img/projects/formation/P0203-underscore2camel.avif";
import GuessMyNumber from "../img/projects/formation/P0208-guess-my-number.avif";
import Bankist from "../img/projects/formation/P0210-bankist.avif";
import PizzaMenu from "../img/projects/formation/P0301-pizza-menu.avif";
import TravelList from "../img/projects/formation/P0305-travel-list.avif";
import TipCalculator from "../img/projects/formation/P0308-tip-calculator.avif";
import EatNSplit from "../img/projects/formation/P0309-eat-n-split.avif";
import UsePopcorn from "../img/projects/formation/P0310-usepopcorn.avif";
import ReactQuiz from "../img/projects/formation/P0317-react-quiz.avif";
import Worldwise from "../img/projects/formation/P0319-worldwise.avif";
import FastReactPizza from "../img/projects/formation/P0323-fast-react-pizza.avif";
import TheWildOasis from "../img/projects/formation/P0324-the-wild-oasis.avif";
import Natours from "../img/projects/formation/P0401-natours.avif";

/* //////////////////////////////////////////////////
IMAGES - THUMBNAILS
////////////////////////////////////////////////// */
import TravelFormGeneratorThumbnail from "../img/projects/perso/P0316-travel-plan-form-thumbnail.avif";
import BentoEnviroThumbnail from "../img/projects/perso/P0330-bento-enviro-thumbnail.avif";
import PrimusLitePlusThumbnail from "../img/projects/perso/prime-lite-plus.webflow.io-thumbnail.avif";
import PigGameThumbnail from "../img/projects/formation/P0202-pig-game-thumbnail.avif";
import UnderscoreToCamelThumbnail from "../img/projects/formation/P0203-underscore2camel-thumbnail.avif";
import GuessMyNumberThumbnail from "../img/projects/formation/P0208-guess-my-number-thumbnail.avif";
import BankistThumbnail from "../img/projects/formation/P0210-bankist-thumbnail.avif";
import PizzaMenuThumbnail from "../img/projects/formation/P0301-pizza-menu-thumbnail.avif";
import TravelListThumbnail from "../img/projects/formation/P0305-travel-list-thumbnail.avif";
import TipCalculatorThumbnail from "../img/projects/formation/P0308-tip-calculator-thumbnail.avif";
import EatNSplitThumbnail from "../img/projects/formation/P0309-eat-n-split-thumbnail.avif";
import UsePopcornThumbnail from "../img/projects/formation/P0310-usepopcorn-thumbnail.avif";
import ReactQuizThumbnail from "../img/projects/formation/P0317-react-quiz-thumbnail.avif";
import WorldwiseThumbnail from "../img/projects/formation/P0319-worldwise-thumbnail.avif";
import FastReactPizzaThumbnail from "../img/projects/formation/P0323-fast-react-pizza-thumbnail.avif";
import TheWildOasisThumbnail from "../img/projects/formation/P0324-the-wild-oasis-thumbnail.avif";
import NatoursThumbnail from "../img/projects/formation/P0401-natours-thumbnail.avif";


/* //////////////////////////////////////////////////
IMAGES - THUMBNAILS MOBILE
////////////////////////////////////////////////// */
import TravelFormGeneratorThumbnailMobile from "../img/projects/perso/P0316-travel-plan-form-thumbnail-mobile.avif";
import BentoEnviroThumbnailMobile from "../img/projects/perso/P0330-bento-enviro-thumbnail-mobile.avif";
import PrimusLitePlusThumbnailMobile from "../img/projects/perso/prime-lite-plus.webflow.io-thumbnail-mobile.avif";

/* //////////////////////////////////////////////////
VIDEO
////////////////////////////////////////////////// */
import BentoEnviroMP4 from "../video/bentoenviro.mp4";
import TfGenMP4 from "../video/tfgen.mp4";
import PrimusLitePlusMP4 from "../video/primusliteplus.mp4";

/* //////////////////////////////////////////////////
VIDEO FOR MOBILE (SM screen size)
////////////////////////////////////////////////// */
import BentoEnviroMP4Mobile from "../video/bentoenviro-mobile.mp4";
import TfGenMP4Mobile from "../video/tfgen-mobile.mp4";
import PrimusLitePlusMP4Mobile from "../video/primusliteplus-mobile.mp4";

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
        thumbnail: TravelFormGeneratorThumbnail,
        thumbnailMobile: TravelFormGeneratorThumbnailMobile,
        screenshot: TravelFormGenerator,
        video: TfGenMP4,
        videoMobile: TfGenMP4Mobile,
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
        thumbnail: BentoEnviroThumbnail,
        thumbnailMobile: BentoEnviroThumbnailMobile,
        screenshot: BentoEnviro,
        video: BentoEnviroMP4,
        videoMobile: BentoEnviroMP4Mobile,
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
        thumbnail: PrimusLitePlusThumbnail,
        thumbnailMobile: PrimusLitePlusThumbnailMobile,
        screenshot: PrimusLitePlus,
        video: PrimusLitePlusMP4,
        videoMobile: PrimusLitePlusMP4Mobile,
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
        thumbnail: TheWildOasisThumbnail,
        thumbnailMobile: "",
        screenshot: TheWildOasis,
        video: "",
        videoMobile: "",
        showcased: false,
        link: "https://tutored-the-wild-oasis.netlify.app/",
        github: "",
    },
    {
        title: "Natours",
        status: "In development",
        version: "0.1.0",
        description: "Login: laura@example.com / Password: test123456789",
        type: ["All projects", "Apps"],
        techs: ["Nodejs", "Expressjs", "MongoDB"],
        thumbnail: NatoursThumbnail,
        thumbnailMobile: "",
        screenshot: Natours,
        video: "",
        videoMobile: "",
        showcased: false,
        link: "https://natours-test-mach90.onrender.com/",
        github: "",
    },
    {
        title: "usePopcorn",
        status: "Finished",
        version: "0.1.0",
        description: "Search, rate and add movies to your watchlist.",
        type: ["All projects", "Apps"],
        techs: ["React"],
        thumbnail: UsePopcornThumbnail,
        thumbnailMobile: "",
        screenshot: UsePopcorn,
        video: "",
        videoMobile: "",
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
        thumbnail: BankistThumbnail,
        thumbnailMobile: "",
        screenshot: Bankist,
        video: "",
        videoMobile: "",
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
        thumbnail: FastReactPizzaThumbnail,
        thumbnailMobile: "",
        screenshot: FastReactPizza,
        video: "",
        videoMobile: "",
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
        thumbnail: TravelListThumbnail,
        thumbnailMobile: "",
        screenshot: TravelList,
        video: "",
        videoMobile: "",
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
        thumbnail: WorldwiseThumbnail,
        thumbnailMobile: "",
        screenshot: Worldwise,
        video: "",
        videoMobile: "",
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
        thumbnail: EatNSplitThumbnail,
        thumbnailMobile: "",
        screenshot: EatNSplit,
        video: "",
        videoMobile: "",
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
        thumbnail: ReactQuizThumbnail,
        thumbnailMobile: "",
        screenshot: ReactQuiz,
        video: "",
        videoMobile: "",
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
        thumbnail: PizzaMenuThumbnail,
        thumbnailMobile: "",
        screenshot: PizzaMenu,
        video: "",
        videoMobile: "",
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
        thumbnail: TipCalculatorThumbnail,
        thumbnailMobile: "",
        screenshot: TipCalculator,
        video: "",
        videoMobile: "",
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
        thumbnail: GuessMyNumberThumbnail,
        thumbnailMobile: "",
        screenshot: GuessMyNumber,
        video: "",
        videoMobile: "",
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
        thumbnail: PigGameThumbnail,
        thumbnailMobile: "",
        screenshot: PigGame,
        video: "",
        videoMobile: "",
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
        thumbnail: UnderscoreToCamelThumbnail,
        thumbnailMobile: "",
        screenshot: UnderscoreToCamel,
        video: "",
        videoMobile: "",
        showcased: false,
        link: "",
        github: "",
    },
];

export default projectsList;