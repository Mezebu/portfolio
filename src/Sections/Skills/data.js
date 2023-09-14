import { v4 as uuidv4 } from "uuid";
// prettier-ignore
import { react, css, htmlIcon, javaScript, mui, git, nextJs, vscode, framerIcon, nodejs, mongodb } from "../../assets";

export const data = [
  { id: uuidv4(), title: "HTML", icon: htmlIcon },
  { id: uuidv4(), title: "CSS", icon: css },
  { id: uuidv4(), title: "Javascript", icon: javaScript },
  { id: uuidv4(), title: "ReactJs", icon: react },
  { id: uuidv4(), title: "NextJs", icon: nextJs },
  { id: uuidv4(), title: "Node Js", icon: nodejs },
  { id: uuidv4(), title: "Git", icon: git },
  { id: uuidv4(), title: "MongoDB", icon: mongodb },
  { id: uuidv4(), title: "Material UI", icon: mui },
  { id: uuidv4(), title: "VS Code", icon: vscode },
  { id: uuidv4(), title: "Framer Motion", icon: framerIcon },
];
