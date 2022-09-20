import React, { useRef } from "react";
import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import AnimateText from "../../components/FramerAnimations/AnimateText";
import { useInView } from "framer-motion";
import { FlexJustifyCenter } from "../../../styles";
import AnimateInview from "../../components/FramerAnimations/AnimateInview";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <Box sx={{ my: 4 }}>
      <Toolbar />
      <Container maxWidth="lg">
        <Box id="about" sx={{ my: 4 }} ref={ref}>
          <FlexJustifyCenter>
            {isInView && (
              <AnimateText text="About Page" variant="h4" fontWeight={700} />
            )}
          </FlexJustifyCenter>

          <Box sx={{ my: 2 }}>
            <Grid container>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <AnimateInview transform="translateX(-100px)">
                  <Typography>
                    {[...new Array(4)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                      )
                      .join("\n")}
                  </Typography>
                </AnimateInview>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={4} md={2} sm={12} xs={12} />
              <Grid item lg={8} md={10} sm={12} xs={12}>
                <AnimateInview transform="translateX(80px)">
                  <Typography>
                    {[...new Array(4)]
                      .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                      )
                      .join("\n")}
                  </Typography>
                </AnimateInview>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
