import React, { useRef } from "react";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import AnimateText from "../../../components/FramerInviewAnimation/AnimateText";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <Box sx={{ my: 4 }}>
      <Toolbar />
      <Container maxWidth="lg">
        <Box id="about" sx={{ my: 4 }} ref={ref}>
          {isInView && <AnimateText text="About Page" />}

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
