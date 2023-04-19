import { IPortfolio } from "../../../types";
import ChefsbookImage from "../../../public/img/project-chefsbook.jpg";
import FirstHairImage from "../../../public/img/project-first-hair.jpg";
import LaCasaImage from "../../../public/img/project-restaurant.jpg";
import GoldenShoeImage from "../../../public/img/project-webshop.jpg";
import VuebankImage from "../../../public/img/Vuebank_image.jpg";
import ElementorImage from "../../../public/img/project-elementor.jpg";
import NoirFataleImage from "../../../public/img/project-noir.jpg";
import BarberImage from "../../../public/img/project-barber.jpg";

export const portfolio: IPortfolio[] = [
  {
    title: "VueBank",
    image: VuebankImage,
    year: "2023",
    techStack: ["Vue3", "NodeJs", "SCSS"],
    description: `VueBank is a hypotetic bank which is implemented as a POC for developing application in Vue 3. 
    It's main functionality is built around Accounts page which allows to drill in the transactions.`,
    urlWebsite: "https://vuebank.michalantczak.com",
  },
  {
    title: "First Hair kapsalon",
    image: FirstHairImage,
    year: "2021",
    techStack: [
      "NextJs (React)",
      "NodeJs",
      "CSS + styled-components",
      "Postgresql",
    ],
    description: `First Hair is a website made for a hairdresser. This project is given truely modern design and user friendly navigation.
    It offers easy to follow appointment reservation system as well as many 'call to action' elements.`,
    urlWebsite: "https://firsthair.itcontext.nl/",
  },
  {
    title: "Golden Shoe - webshop",
    image: GoldenShoeImage,
    year: "2021",
    techStack: [
      "PWA",
      "NextJs (React)",
      "NodeJs",
      "Styled components",
      "Postgresql",
      "Stripe payments",
    ],
    description: `Golden is the shoes webshop. It contains all desired functionality. Its user interface is very easy
    and intuitive which makes navigation between sections almost natural. Website tracks recent showed products and
    stores shopping cart in in localStorage object. You can register or buy without logging in. Checkout is safe and
    supports many popular payment methods.`,
    urlWebsite: "https://goldenshoe.michalantczak.com/",
  },
  {
    title: "Chefsbook - handy tool for professional kitchen",
    image: ChefsbookImage,
    year: "2021",
    techStack: [
      "NextJs (React)",
      "NodeJs",
      "CSS + styled-components",
      "Postgresql + JWT",
    ],
    description: `Chefsbook application has been dedicated to all professional chefs wanting to manage their kitchen in the digital way. 
    The functionality consist of: creating and storing events like reservations in the calendar,
    handling team members and planning their schedule, creating preparation lists for given date, storing recipes with photos,
     managing own profile.`,
    urlWebsite: "https://chefsbook.org",
  },
  {
    title: "Noir Fatale - dark electronics",
    image: NoirFataleImage,
    year: "2018",
    techStack: ["GatsbyJs (React)", "CSS Modules"],
    description: `It's my private music project website. Making music is my big passion. 
    This website has been created with GatsbyJs and CSS modules. 
    I invite you to visit and listen to my  original, dark, electronic music.`,
    urlWebsite: "https://noirfatale.com",
  },
  {
    title: "Project Elementor",
    image: ElementorImage,
    year: "2020",
    techStack: ["React", "Styled Components"],
    description: `It is made by me React template, inspired by the similar Wordpress template.`,
    urlWebsite: "http://showroom.itcontext.nl/template-1",
  },
  {
    title: "Barber Kapsalon",
    image: BarberImage,
    year: "2018",
    techStack: [
      "NodeJs",
      "React",
      "CSS + Sass",
      "Postgresql",
      "My custom CMS - Psql + AWS S3",
    ],
    description: `Barber Hairdresser is the hairdresser saloon. This neat and functional Web Application is made for the hairdresser
    salon. It's more than only informative website where customer can find prices and look at the beautifull and ease to use
    photo gallery. It's also elegant and easy way to send a contact request and make the appointments online.`,
    urlWebsite: "https://kapsalon.michalantczak.com/",
  },
  {
    title: "La Casa - Restaurant",
    image: LaCasaImage,
    year: "2019",
    techStack: [
      "GatsbyJs (React)",
      "CSS + styled-components",
      "Continuous Deployment Netlify + Github Actions",
    ],
    description: `La Casa Restaurant is the italian restaurant. Their website present the company as sofisticated and elegant place.
    Visitor can chose the language and deep in the menu available online. For those who want to reserve the table special
    resevation system collect all necessary data including coronavirus disclaimer. Guests can also send a contact form if
    they have any questions.`,
    urlWebsite: "https://condescending-euclid-455bb0.netlify.app/nl/",
  },
];
