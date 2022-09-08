import React from "react";
import { Box, Container, Typography } from "@mui/material";

import Link from "../../Link";
import ProTip from "../../ProTip";

const HomeHero = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Container maxWidth="lg">
        <Box id="hero" sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example Hero
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>

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
          <ProTip />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;
