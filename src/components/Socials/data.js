import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    name: "Github",
    link: "https://github.com/mezebu",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    id: uuidv4(),
    name: "Email",
    link: "mailto:mezebu07@gmail.com?Subject=Hello%20Henry",
    icon: <EmailRoundedIcon fontSize="large" />,
  },
  {
    id: uuidv4(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/henry-ezeigwe",
    icon: <LinkedInIcon fontSize="large" />,
  },
];
