import webpack from "../assets/webpack.svg";
import typescript from "../assets/typescript.svg";
import javascript from "../assets/javascript.svg";
import babel from "../assets/babel.svg";
import git from "../assets/git.svg";
import html from "../assets/html5.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import rxjs from "../assets/rxjs.svg";
import sass from "../assets/sass.svg";
import tailwind from "../assets/tailwind-css.svg";
import vite from "../assets/vite.svg";
import postgres from "../assets/postgresql.svg";
import sequelize from "../assets/sequelize.svg";
import npm from "../assets/npm.svg";
import mongo from "../assets/mongo.svg";
import "../App.css";
import css from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
interface skill {
  name: string;
  skill: string;
}
const skills: skill[] = [
  { name: "TypeScript", skill: typescript },
  { name: "React", skill: react },
  { name: "Redux", skill: redux },
  { name: "Mongo", skill: mongo },
  { name: "SASS", skill: sass },
  { name: "PostgreSQL", skill: postgres },
  { name: "Sequelize", skill: sequelize },
  { name: "JavaScript", skill: javascript },
  { name: "Git", skill: git },
  { name: "Npm", skill: npm },
  { name: "Tailwind", skill: tailwind },
  { name: "Vite", skill: vite },
  { name: "WebPack", skill: webpack },
  { name: "Babel", skill: babel },
  { name: "HTML", skill: html },
  { name: "CSS", skill: css },
  { name: "Bootstrap", skill: bootstrap },
  { name: "rxjs", skill: rxjs },
];

export default skills;
