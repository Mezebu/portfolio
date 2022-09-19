import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import ProjectItems from "../../../components/ProjectItems/ProjectItems";

const SkillsSection = () => {
  return (
    <Box sx={{ my: 7 }}>
      <Container maxWidth="lg">
        <Box id="skills" sx={{ my: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Skills Section
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ my: 2 }}>
                {[...new Array(12)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ my: 2 }}>
                <ProjectItems />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
