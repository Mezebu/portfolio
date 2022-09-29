import { Box, Toolbar, Typography } from "@mui/material";

import ProjectItems from "../../components/ProjectItems/ProjectItems";
import Section from "../../components/Section/Section";

const Works = () => {
  return (
    <Section component="section" id="works">
      <Box>
        <Typography
          sx={{ fontSize: 11, letterSpacing: 3 }}
          color="text.secondary"
          variant="button"
        >
          My Work
        </Typography>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          RECENT WORKS
        </Typography>
      </Box>
      <Toolbar />
      <ProjectItems />
      <Toolbar />
    </Section>
  );
};

export default Works;
