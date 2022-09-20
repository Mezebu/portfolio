import React, { useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useInView } from "framer-motion";

import ProjectItems from "../../components/ProjectItems/ProjectItems";
import AnimateText from "../../components/FramerAnimations/AnimateText";
import { FlexJustifyCenter } from "../../../styles";

const SkillsSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <Box sx={{ my: 7 }}>
      <Container maxWidth="lg">
        <Box id="skills" sx={{ my: 2 }} ref={ref}>
          <FlexJustifyCenter>
            {isInView && (
              <AnimateText text="Projects" variant="h4" fontWeight={700} />
            )}
          </FlexJustifyCenter>

          <Grid container spacing={2}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box sx={{ my: 5 }}>
                {[...new Array(5)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={4} md={2} sm={12} xs={12} />
            <Grid item lg={8} md={10} sm={12} xs={12}>
              <Box sx={{ my: 5 }}>
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
