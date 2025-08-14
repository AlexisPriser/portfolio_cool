import Experience from "./components/Experience";
import Competences from "./components/Competences";

import js_svg from "./logos/js.svg";
import ts_svg from "./logos/typescript.svg";
import react_svg from "./logos/reactjs.svg";
import html_svg from "./logos/html-5.svg";
import css_svg from "./logos/css-3.svg";
import mongodb_svg from "./logos/mongodb-logo.svg";
import mysql_svg from "./logos/mysql.svg";
import nextjs_svg from "./logos/nextjs_l7vxuz.svg";
import nodejs_svg from "./logos/nodejs-icon.svg";
import python_svg from "./logos/python.svg";
import redux_svg from "./logos/redux.svg";
import git_svg from "./logos/git-icon.svg";
import gamemaker_svg from "./logos/gamemaker.svg";
import sequelize_svg from "./logos/sequelize.svg";
import vscode_svg from "./logos/vscode.svg";
import itchio_svg from "./logos/itch-io.svg";
import cv_svg from "./logos/cv-file.svg";
import linkedin_svg from "./logos/linkedin.svg";
import mail_svg from "./logos/mail.svg";

import nether_escape_img from "./images/CoverNetherEscape.png";
import lycee_agora_img from "./images/agora.jpg";
import capgemini_img from "./images/capgemini.jpg";
import chu_ramb_img from "./images/CHU_rambouillet.jpg";
import dassault_img from "./images/dassault.jpg";
import imie_img from "./images/imie_paris.png";
import lycee_ramb_img from "./images/lycee_ramb.jpg";
import safran_img from "./images/safran_tech.jpg";
import ownsport_img from "./images/ownsport.png";

import cv_pdf from "./download/CV_Alexis_PRISER.pdf";

import { DefaultSerializer } from "v8";
import { useRef } from "react";

export interface ContentType {
  lieu?: string;
  duree?: string;
  titre: string;
  description: string;
  img?: any;
  link?: {
    text: string;
    url: string;
  };
}

export type NavType = Record<string, React.LegacyRef<any>>;

export interface ExperienceType {
  titre: string;
  content: ContentType[];
}
export interface ProfilType {
  resume: { titre: string; description: string };
  details: { titre: string; content: Record<string, string> };
  wordTrain: string[];
}

export interface ContCompType {
  titre: string;
  img: any;
}
export interface CompType {
  titre: string;
  content: ContCompType[];
}
export interface LinksType {
  titre: string;
  link: string;
  img: any;
}
export interface DataType {
  profil: ProfilType;
  competences: CompType[];
  experiences: ExperienceType[];
  liens: LinksType[];
}

function _calculateAge(birthday: Date) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const curr_age = _calculateAge(new Date("Feb 23, 1997"));

const data = {
  profil: {
    resume: {
      titre: "A mon propos",
      description: `Fort de mon expérience en développement, j’élabore des feuilles de route techniques claires et innovantes.
Polyvalent, je conçois des projets web, mobiles et logiciels sur toute la chaîne de valeur.
Rigoureux, j’optimise en continu et veille aux dernières tendances pour livrer des solutions performantes.
Travailler en équipe et partager mes idées est un moteur dans chacune de mes missions.`,
    },
    details: {
      titre: "Détails",
      content: {
        Nom: "Alexis PRISER",
        Age: curr_age + " ans",
        Lieu: "78310 Maurepas",
        Tél: "06 81 99 17 39",
        Mail: "priseralexis78@gmail.com",
      },
    },
    wordTrain: [
      "dev",
      "web",
      "curieux",
      "créatif",
      "react",
      "typescript",
      "game maker",
      "passionné",
      "organisé",
      "persévérant",
      "jeux vidéos",
      "logiciels",
      "effets visuels",
      "programme",
      "dessine",
      "compose",
      "optimise",
      "planifie",
    ],
  },
  competences: [
    {
      titre: "Mes meilleurs outils",
      content: [
        { titre: "React", img: react_svg },
        { titre: "Typescript", img: ts_svg },
        { titre: "JavaScript", img: js_svg },
        { titre: "git", img: git_svg },
        { titre: "NodeJS", img: nodejs_svg },
        { titre: "NextJS", img: nextjs_svg },
        { titre: "Redux", img: redux_svg },
        { titre: "Python", img: python_svg },
      ],
    },
    {
      titre: "Autres technologies",
      content: [
        { titre: "MongoDB", img: mongodb_svg },
        { titre: "HTML", img: html_svg },
        { titre: "CSS", img: css_svg },
        { titre: "MySQL", img: mysql_svg },
        { titre: "Sequelize", img: sequelize_svg },
        { titre: "VisualStudio Code", img: vscode_svg },
        { titre: "GameMaker", img: gamemaker_svg },
      ],
    },
  ],
  experiences: [
    {
      titre: "Professionnel",
      content: [
        {
          lieu: "Capgemini",
          duree: "Juin 2022 - novembre 2024",
          titre: "  Associate Prod Softw Engineer",
          img: capgemini_img,
          description: `Missions dev Fullstack chez des clients :
-Safran Tech (17 mois) : Développement de l’application en React. Développement de fonctionnalités back-end en Python.
-Dassault Aviation (2 mois) : Développement de l’application en React et migration de Javascript à Typescript.
Missions internes (7 mois) :
-Enseignement complet de React et Typescript à une équipe de dev.
-développement en React, Ionic et Python d’une Application téléphone pour trajets sur la route.
`,
        },
        {
          lieu: "Ownsport",
          duree: "octobre 2020 - septembre 2021",
          titre: "Développeur Fullstack (alternance)",
          img: ownsport_img,
          description: `En tant qu'alternant, je travaillais avec une équipe sur un projet visant à adapter un logiciel Java en interface web. 
            Utilisant React et NodeJs, j'ai développé la partie front et une partie du back-end.`,
        },
        {
          lieu: "Centre Hospitalier de Rambouillet",
          duree: "mai 2017 - juillet 2017",
          titre: "Développeur Front-End (stage)",
          img: chu_ramb_img,
          description: `A la fin de ma première année de BTS, j'ai fait stage de 6 semaines où j'ai réparé le site web de l’hôpital, analysé sa structure et reconstruit celle-ci via deux CMS (joomla et wordpress).`,
        },
      ],
    },
    {
      titre: "Projets",
      content: [
        {
          titre: "NetherEscape",
          description: `Ce projet conciste à créer un jeu video sur GameMaker en se basant sur NuclearThrone: un rogue-like en vue du dessus, où il faut tirer sur tout se qui bouge pour progresser dans des niveaux hostiles générés aléatoirement.
            Mon jeu est toujours en développement, vous pourrez trouver le lien de téléchargement sur ma page itch.io`,
          img: nether_escape_img,
          link: {
            text: "Lien du jeu",
            url: "https://estrico.itch.io/netherescape",
          },
        },
      ],
    },
    {
      titre: "Etudes",
      content: [
        {
          lieu: "IMIE Paris",
          duree: "2020 - 2021",
          titre: "Bachelor Concepteur Développeur D'Applications",
          img: imie_img,
          description: `Ayant suivi cette formation en alternance afin d'aquerir de l'experience dans le domaine des projets de développement informatique en entreprise.
          Pour valider mon année j'ai fais cette alternance en travaillant en tant que développeur fullstack dans l'entreprise Ownsport.`,
        },
        {
          lieu: "Lycée Agora",
          duree: "2016 - 2018",
          titre: "BTS Sytèmes Numériques Informatiques et Réseaux",
          img: lycee_agora_img,
          description: `Pendant ma première année j'ai appris les différents langages de programmation web(HTML,CSS,PHP,SQL) ainsi que le langage C, la manipulation et création de réseaux locaux.
            Ma seconde année m'a initié au langages orientés objets tel que le Java et le C++.
            J'ai d'ailleurs programmé en Java une application Android de géolocalisation dans le contexte d'un musée.`,
        },
        {
          lieu: "Lycée Louis Bascan",
          duree: "2013 - 2016",
          titre: "Baccalauréat STI2D,option SIN",
          img: lycee_ramb_img,
          description: `Ces études au lycée m'ont permis de m’intéresser aux nouvelles technologies.
            Ayant apprécié le codage sur Arduino pour un projet de fin d'année, j'ai alors décidé de m'orienter vers des études informatiques.`,
        },
      ],
    },
  ],
  liens: [
    {
      titre: "ma page itchio",
      link: "https://itch.io/profile/estrico",
      img: itchio_svg,
    },
    {
      titre: "mon linkedin",
      link: "https://fr.linkedin.com/in/alexis-priser-454151162",
      img: linkedin_svg,
    },
    {
      titre: "mon mail",
      link: "mailto:priseralexis78@gmail.com",
      img: mail_svg,
    },
    { titre: "mon CV", link: cv_pdf, img: cv_svg },
  ],
} as DataType;

export default data;
