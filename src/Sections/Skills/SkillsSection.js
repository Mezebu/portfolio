import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SkillsSection = () => {
  return (
    <Box sx={{ my: 7 }}>
      <Container maxWidth="lg">
        <Box id="skills" sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Skills Section
          </Typography>

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
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
