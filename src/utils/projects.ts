import broken from "../assets/broken-office.jpeg";
import { Proyecto } from "../interfaces/proyecto";

const projects: Proyecto[] = [
  {
    name: "Broken-Office for Globant",
    description:
      "Aplicación Mobile Firts que permite a los Globers reportar objetos rotos en oficinas. Utilizando Geolocalicación y Machine Learing paragenerar tags que den más contexto a dichos reportes.",
    img: broken,
    stack: "React | Redux | Express | MongoDB | Mongoose | Vision IA",
  },
  {
    name: "Mi Porfolio - Franco Jalil",
    description: "El lugar donde muestro todos mis trabajos y experiencias",
    img: broken,
    stack: "React | TypeScript | CSS | Charka UI | Framer Motion ",
  },
];

export default projects;
