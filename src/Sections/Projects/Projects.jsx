import { Box, Toolbar } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HeroProjectOne from "../../components/HeroProjectOne/HeroProjectOne";
import HeroProjectTwo from "../../components/HeroProjectTwo/HeroProjectTwo";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="my work" title="RECENT WORKS" />

      <ProjectCard />
    </Box>
  );
};

export default Works;
