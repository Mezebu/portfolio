import { v4 as uuidv4 } from "uuid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export const data = [
  {
    id: uuidv4(),
    label: "github-icon",
    icon: <GitHubIcon />,
    link: "https://github.com/mezebu",
  },
  {
    id: uuidv4(),
    label: "linkedin-icon",
    icon: <LinkedInIcon />,
    link: "https://linkedin.com/in/henry-ezeigwe",
  },
  {
    id: uuidv4(),
    label: "email-icon",
    icon: <EmailRoundedIcon />,
    link: "mailto:mezebu07@gmail.com?Subject=Hey Henry!✋",
  },
];
