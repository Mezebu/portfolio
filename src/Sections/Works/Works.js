import { Box, Container, Typography } from "@mui/material";

import ProjectItems from "../../components/ProjectItems/ProjectItems";

const Works = () => {
  return (
    <Box component="section" id="works">
      <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>
          <Typography align="center">Works</Typography>
        </Box>
        <Box sx={{ my: 6 }}>
          <ProjectItems />
        </Box>
      </Container>
    </Box>
  );
};

export default Works;
