import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";

import { StyledBannerText, StyledDate, StyledGreyDot } from "./styles";
import { twist, sphere } from "../../assets";
import { FlexJustifyCenter, FlexSpaceBtween } from "../../../styles";
import AnimateText from "../../components/FramerAnimations/AnimateText";
import Section from "../../components/Section/Section";
import BannerText from "../../components/BannerText/BannerText";
import PageNumber from "../../components/PageNumber/PageNumber";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section id="hero" component="section">
      <Grid container>
        {/*prettier-ignore*/}
        <Grid item lg={5} md={5} sm={5} xs={12} sx={{ display: { xs: "none", md: "block" } }}>
      
         <Image src={sphere} alt="image" layout="responsive" />
         </Grid>

        <Grid item lg={7} md={7} sm={12} xs={12}>
          <BannerText />
        </Grid>
      </Grid>

      {/* <StyledDate
        variant="button"
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        ©{new Date().getFullYear()}
      </StyledDate> */}

      <StyledGreyDot />

      {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Image src={ArrowDown} alt="image" height="100px" width="100px" />
        </Box> */}
      {/*  <FlexSpaceBtween>
        <BlurOnIcon sx={{ fontSize: 50 }} />
      </FlexSpaceBtween> */}
      <Grid container>
        <Grid item lg={6} md={6} sm={6}>
          <AnimateText
            text="Interface"
            variant="subtitle2"
            letterSpacing={3}
            fontWeight={700}
            align="left"
          />
          <AnimateText
            text="Minimalism in UI Design"
            variant="subtitle2"
            letterSpacing={3}
            fontWeight={700}
            align="left"
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <PageNumber page="01" />
          </Box>
        </Grid>
      </Grid>
      {/*  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            ml: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", lg: "space-evenly" },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ letterSpacing: 3, fontWeight: 700 }}
            align="right"
          >
            Interface
          </Typography>
          <Typography
            variant="subtitle12"
            sx={{ letterSpacing: 3, fontWeight: 700 }}
          >
            Minimalism in UI Design
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <PageNumber page="01" />
        </Box>
      </Box> */}
    </Section>
  );
};

export default Hero;
