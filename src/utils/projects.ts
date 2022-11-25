import broken from "../assets/broken-office.jpeg";
import bbt from "../assets/bbt1.png";
import porfolio from "../assets/porfolio.png";
import tmdb from "../assets/TMDB.png";
import { Proyecto } from "../interfaces/proyecto";

const projects: Proyecto[] = [
  {
    name: "Broken-Office for Globant",
    description:
      "Aplicación Mobile Firts que permite a los Globers reportar objetos rotos en oficinas. Utilizando Geolocalicación y Machine Learing paragenerar tags que den más contexto a dichos reportes.",
    img: broken,
    stack: "React | Redux | Express | MongoDB | Mongoose | Vision IA",
    github: "https://github.com/milagrosdoldan/Broken-Office",
    deploy: "https://broken-office.netlify.app/",
  },

  {
    name: "TMDB",
    description:
      "Consumiento API de peliculas TMDB, donde puedo ver un listado de peliculas y series, un buscador y la posibilidad de agregar a favortios.",
    img: tmdb,
    stack:
      "React | TypeScript | Charka UI | Framer Motion | NodeJS | Express | MongoDB | Mongoose",
    github: "https://github.com/francojalil7/TMDB-Frontend",
    // deploy: "https://tmdb-frontend-mu.vercel.app/"
  },
  {
    name: "BBT-Todo",
    description:
      "E-commerce de bebidas en el marco del Coding Bootcamp de Plataforma 5. En un equipo de 5 devs, trabajamos con metodologías ágiles durante dos semanas.",
    img: bbt,
    stack: "React | JavaScript | Material UI | PostgreSQL | Sequelize ",
    github: "https://github.com/PedroAgustinBauso/e-commerce",
  },
  {
    name: "Mi Porfolio - Franco Jalil",
    description: "El lugar donde muestro todos mis trabajos y experiencias.",
    img: porfolio,
    stack: "React | TypeScript | CSS | Charka UI | Framer Motion ",
    github: "https://github.com/francojalil7/porfolio",
    deploy: "https://porfolio-francojalil7.vercel.app/",
  },
];

export default projects;
