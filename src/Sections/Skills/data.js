import { v4 as uuidv4 } from "uuid";
// prettier-ignore
import { react, css, htmlIcon, javaScript, mui, git, nextJs, vscode, framerIcon, nodejs, mongodb, typescript } from "../../assets";

export const data = [
  { id: uuidv4(), title: "HTML", icon: htmlIcon },
  { id: uuidv4(), title: "CSS", icon: css },
  {
    id: uuidv4(),
    title: "Javascript",
    icon: javaScript,
    link: "https://www.javascript.com/",
  },
  { id: uuidv4(), title: "ReactJs", icon: react, link: "https://react.dev/" },
  { id: uuidv4(), title: "NextJs", icon: nextJs, link: "https://nextjs.org/" },
  {
    id: uuidv4(),
    title: "Node Js",
    icon: nodejs,
    link: "https://nodejs.org/en",
  },
  { id: uuidv4(), title: "Git", icon: git, link: "https://git-scm.com/" },
  {
    id: uuidv4(),
    title: "MongoDB",
    icon: mongodb,
    link: "https://www.mongodb.com/",
  },
  {
    id: uuidv4(),
    title: "Material UI",
    icon: mui,
    link: "https://mui.com/material-ui/",
  },
  {
    id: uuidv4(),
    title: "VS Code",
    icon: vscode,
    link: "https://code.visualstudio.com/",
  },
  {
    id: uuidv4(),
    title: "Framer Motion",
    icon: framerIcon,
    link: "https://www.framer.com/motion/",
  },
  {
    id: uuidv4(),
    title: "Typescript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
  },
];
