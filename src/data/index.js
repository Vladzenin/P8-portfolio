import {
  carducci,
  bluel,
  grimoire,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Accueil",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "JavaScript",
    company_name: "Sophie Bluel",
    date: "2024",
    details: [
      "J'ai conçu le site d'architecte de <span style='color: white;'>Sophie Bluel</span> afin qu'elle puisse y afficher ses travaux .",
      "Une interface utlisateur afin de pouvoir afficher ou supprimer ses travaux via  <span style='color: white;'>un systeme de login</span>.",
      "Un espace avec ses coordonnées et un  <span style='color: white;'>formulaire de contact</span> <span style='color: white;'>le tout en Javascript</span> .",
      "difficultés rencontrés:<span style='color: white;'>utilisation du DOM création des pages ''from scratch''</span>,Grande vigilance lors des cours et de la saisie du code nottament du css",
      "Compétences acquise: <span style='color: white;'>HTML,CSS,Javascript,DOM,VScode,github,</span>",
    ],
  },
  {
    title: "NODE JS",
    company_name: "Mon vieux Grimoire",
    date: "2024",
    details: [
      "Un site de notation de livre avec une <span style='color: white;'>interface utilisateur complète</span>.",
      "<span style='color: white;'>Un systême d'ajout et de suppresion fonctionnelle</span> de livres et la possibilité de gerer sa collection a sa guise.",
      "<span style='color: white;'>Une base de donnée et un systeme de login</span> qui permet a n'importe quel utilisateur de créer ou se connecter a sa collection personnel.",
      "difficultés rencontrés:<span style='color: white;'>l'implementation des système de sécurité dont le cryptage</span>,Grande vigilance lors de la saisie du code et utilisation de la modale JWT",
      "Compétences acquise: <span style='color: white;'>NODE.js,Express.js,CRUD,MONGODB,Mongoose,</span>",
    ],
  },
  {
    title: "REACT",
    company_name: "KASA",
    date: "2024",
    details: [
      "Mise en place d'un site immobilier entre particuliers sur base <span style='color: white;'>REACT</span> avec plusieurs pages.",
      "un systeme de card avec un <span style='color: white;'>Rating,menu déroulant</span>, une page d'erreur et une page d'information a propos du site.",
      "Le tout sur une page fluide simple a la navigation et une <span style='color: white;'>interface claire</span>.",
      "difficultés rencontrés:<span style='color: white;'>Mise en page</span>,mis en place d'une ''grid'' dans le css pour les items ",
      "Compétences acquise: <span style='color: white;'>REACT,REACT Router,Javascript,CSS,Node.js</span>",
    ],
  },
  {
    title: "Formation dev web",
    company_name: "Openclassrooms",
    date: "fevrier 2024",
    details: [
      "Formation en ligne de 6 mois </span> durant laquelle j'ai aborder autant le <span style='color: white;'>Frontend</span> que le <span style='color: white;'>Backend</span>.",
      "J'ai pu me familiariser avec <span style='color: white;'>HTML, CSS/SASS, Javascript, React et NODE JS</span> pour gagner en autonomie et en compétences.",
      "j'ai également fais de <span style='color: white;'>l'analyse et du Déboguage</span> durant cette période.",
      "Compétences acquise: <span style='color: white;'>HTML,CSS/SASS,REACT,REACT Router,React DOM,API,Javascript,Node.js</span>",
    ],
  },
];

const portfolio = [
  {
    name: "Site architecte Sophie Bluel",
    description:
      "Un site vitrine codé en javascript avec une interface utilisateur pour afficher et supprimer des travaux a sa guise pour le compte de Sophie Bluel.",
    image: bluel,
  },
  {
    name: "Déboguage et Optimisation site photo",
    description:
      "Une correction complete des bugs présent sur le site client d'une photographe en passant par l'optimisation et le référencement de celui-ci.",
    image: carducci,
  },
  {
    name: "Backend d'un site de livre",
    description:
      "mise en place du backend d'un site sur base REACT en y incorporant une base de donnée,compte utilisateur,un systeme d'authentification et de token.",
    image: grimoire,
  },
];

export { experiences, portfolio };

