import { Box, Container, Typography } from "@mui/material";

import ProjectItems from "../../components/ProjectItems/ProjectItems";

const Works = () => {
  return (
    <Box component="section" id="works">
      <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>
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
        <Box sx={{ my: 6 }}>
          <ProjectItems />
        </Box>
      </Container>
    </Box>
  );
};

export default Works;
