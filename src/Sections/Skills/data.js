import { v4 as uuidv4 } from "uuid";
// prettier-ignore
import { react, css, htmlIcon, javaScript, mui, git, nextJs, bootstrap, vscode } from "../../assets";

export const data = [
  { id: uuidv4(), title: "HTML", icon: htmlIcon },
  { id: uuidv4(), title: "CSS", icon: css },
  { id: uuidv4(), title: "Javascript", icon: javaScript },
  { id: uuidv4(), title: "ReactJs", icon: react },
  { id: uuidv4(), title: "NextJs", icon: nextJs },
  { id: uuidv4(), title: "Version Control", icon: git },
  { id: uuidv4(), title: "Material UI", icon: mui },
  { id: uuidv4(), title: "Bootstrap", icon: bootstrap },
  { id: uuidv4(), title: "VS Code", icon: vscode },
];
