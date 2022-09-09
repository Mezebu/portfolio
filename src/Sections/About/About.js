import React from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Toolbar />
      <Container maxWidth="lg">
        <Box id="about" sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            About Page
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

export default About;
