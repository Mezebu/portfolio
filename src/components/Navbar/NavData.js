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
    offSet: -160,
  },
  {
    id: 2,
    title: "About",
    page: "about",
    icon: <InfoIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -89,
  },
  {
    id: 3,
    title: "Experiences",
    page: "skills",
    icon: <PsychologyIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -80,
  },
  {
    id: 4,
    title: "Works",
    page: "works",
    icon: <WorkHistoryIcon sx={{ fontSize: 15, mr: 0.5 }} />,
    offSet: -120,
  },
];
