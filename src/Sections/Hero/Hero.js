import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import { stickerDark, stickerLight } from "../../assets";
import { StyledBigHeading } from "./styles";
import { FlexCenter } from "../../../styles/globalStyles";

import HeroAccordion from "../../components/HeroAccordion/HeroAccordion";
import ResumeBtn from "../../components/ResumeBtn/ResumeBtn";

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
          sx={{ mx: { lg: 10, xs: 3 } }}
        >
          {`I'm`} a frontend developer and i enjoy implementing visual elements
          that users see and interact with all the while keeping the balance
          between visual and functional design.
        </Typography>
      </Box>

      <ResumeBtn />

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
