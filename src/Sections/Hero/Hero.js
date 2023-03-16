import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import { stickerDark, stickerLight } from "../../assets";
import { StyledBigHeading } from "./styles";
import { FlexCenter } from "../../../styles/globalStyles";

import HeroAccordion from "../../components/HeroAccordion/HeroAccordion";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ overflow: "hidden" }}>
        <StyledBigHeading
          component={motion.h1}
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 1, delay: 1 }}
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
          transition={{ duration: 1, delay: 1 }}
          align="center"
          sx={{ mx: { lg: 10 } }}
        >
          I am a web developer with skills in javascript and reactjs, and have
          an interest in solving algorithmically complex problems. I have a
          passion for problem solving. Currently, I am building a web
          application that is a marketplace where people can subscribe to other
          users to get access to video content they produce.
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
          transition={{ duration: 1, delay: 1 }}
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
        <Grid item lg={6} md={6} sm={12} xs={12}>
          {theme.palette.mode === "light" ? (
            <FlexCenter sx={{ py: 5 }}>
              <Image src={stickerLight} alt="sticker" priority={true} />
            </FlexCenter>
          ) : (
            <FlexCenter sx={{ py: 5 }}>
              <Image src={stickerDark} alt="sticker" priority={true} />
            </FlexCenter>
          )}
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <HeroAccordion />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
