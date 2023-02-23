import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FlexCenter } from "../../../styles/globalStyles";

import Banner from "../../components/Banner/Banner";
import HeroAccordion from "../../components/HeroAccordion/HeroAccordion";
import { StyledBigHeading } from "./styles";

const Hero = () => {
  return (
    <Box sx={{ height: "83vh" }}>
      {/*   <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(12px, 4vw, 16px)",
          fontWeight: 600,
        }}
        align="center"
      >
        Hi, my name is
      </Typography> */}
      {/*  <Banner /> */}
      <StyledBigHeading
        component={motion.div}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        variant="h1"
        align="center"
      >
        I BUILD THINGS FOR THE{" "}
        <Typography
          component="span"
          sx={{
            color: "#04bdb0",
            fontSize: "clamp(50px, 8vw, 75px)",
            fontWeight: 700,
          }}
        >
          WEB
        </Typography>
      </StyledBigHeading>

      <Typography component="p" align="center" sx={{ mx: { lg: 10 } }}>
        I am a web developer with skills in javascript and reactjs, and have an
        interest in solving algorithmically complex problems. I have a passion
        for problem solving. Currently, I am building a web application that is
        a marketplace where people can subscribe to other users to get access to
        video content they produce. The application currently has 25 active
        users.
      </Typography>
      <FlexCenter sx={{ my: 3 }}>
        <Button
          variant="contained"
          size="large"
          disableElevation
          sx={{
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.common.black
                : theme.palette.secondary,
          }}
        >
          Download Resume
        </Button>
      </FlexCenter>

      <Grid container>
        <Grid item lg={6} md={6} xs={12}>
          <HeroAccordion />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
