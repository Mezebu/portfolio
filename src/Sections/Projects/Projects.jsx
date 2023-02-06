import { Box, Toolbar } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HeroProjectOne from "../../components/HeroProjectOne/HeroProjectOne";
import HeroProjectTwo from "../../components/HeroProjectTwo/HeroProjectTwo";

const Works = () => {
  return (
    <Box>
      <Toolbar />
      <SectionHeader subTitle="my work" title="RECENT WORKS" />
      <HeroProjectOne />
      <Toolbar />
      <HeroProjectTwo />
      <Toolbar />
    </Box>
  );
};

export default Works;
