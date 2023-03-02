import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FlexCenter } from "../../../styles/globalStyles";
import { container, item } from "../../components/FramerAnimations/variants";

import HeroAccordion from "../../components/HeroAccordion/HeroAccordion";
import { StyledBigHeading } from "./styles";

const Hero = () => {
  return (
    <Box sx={{ height: "90vh" }}>
      <Box sx={{ overflow: "hidden" }}>
        <StyledBigHeading
          component={motion.h1}
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.9, delay: 0.8 }}
          variant="h1"
          align="center"
        >
          I BUILD THINGS FOR{" "}
          <Typography
            component="span"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.primary.light
                  : theme.palette.secondary.light,
              fontSize: "clamp(40px, 7vw, 70px)",
              fontWeight: 700,
            }}
          >
            THE WEB
          </Typography>
        </StyledBigHeading>
      </Box>
      <Box sx={{ overflow: "hidden" }}>
        <Typography
          component={motion.p}
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.9, delay: 1 }}
          align="center"
          sx={{ mx: { lg: 10 } }}
        >
          I am a web developer with skills in javascript and reactjs, and have
          an interest in solving algorithmically complex problems. I have a
          passion for problem solving. Currently, I am building a web
          application that is a marketplace where people can subscribe to other
          users to get access to video content they produce. The application
          currently has 25 active users.
        </Typography>
      </Box>

      <FlexCenter sx={{ my: 3, overflow: "hidden" }}>
        <Button
          variant="contained"
          size="large"
          disableElevation
          component={motion.button}
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.9, delay: 1.1 }}
          sx={{
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.black
                : theme.palette.secondary.light,
          }}
        >
          Download Resume
        </Button>
      </FlexCenter>

      <Grid container>
        <Grid item lg={6} md={6} xs={12}>
          test
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <HeroAccordion />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
