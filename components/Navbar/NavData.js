import InfoIcon from "@mui/icons-material/Info";
import RoofingIcon from "@mui/icons-material/Roofing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    page: "hero",
    icon: <RoofingIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -130,
  },
  {
    id: 2,
    title: "About",
    page: "about",
    icon: <InfoIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -100,
  },
  {
    id: 3,
    title: "Skills",
    page: "skills",
    icon: <PsychologyIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -110,
  },
  {
    id: 4,
    title: "Projects",
    page: "projects",
    icon: <WorkHistoryIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: 100,
  },
];
