import { animateScroll as scroll } from "react-scroll";
import { Box, Button, Grid, IconButton } from "@mui/material";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import Image from "next/image";

import { StyledGreyDot } from "./styles";
import AnimateText from "../../components/FramerAnimations/AnimateText";
import Section from "../../components/Section/Section";
import BannerText from "../../components/BannerText/BannerText";
import PageNumber from "../../components/PageNumber/PageNumber";
import { sphere } from "../../assets";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FlexJustifyCenter } from "../../../styles/globalStyles";

const Hero = () => {
  const handleScroll = () => {
    scroll.scrollTo(630, { smooth: true, duration: 1500 });
  };

  return (
    <Section id="hero" component="section">
      <Box component="article">
        <Grid container>
          {/*prettier-ignore*/}
          <Grid item lg={5} md={5} sx={{ display: { xs: "none", md: "block" } }}>     
            <Image src={sphere} alt="image" layout="responsive" />
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <BannerText />
          </Grid>
        </Grid>
        <StyledGreyDot />
        <Grid container>
          <Grid item lg={6} md={6} sm={6}>
            <AnimateText
              text="Interface"
              variant="subtitle2"
              letterSpacing={3}
              fontWeight={700}
            />
            <AnimateText
              text="Minimalism in UI Design"
              variant="subtitle2"
              letterSpacing={3}
              fontWeight={700}
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
            <Box>
              <PageNumber page="01" />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.6,
              delay: 0.9,
              type: "tween",
              repeat: 2,
              repeatType: "loop",
            }}
          >
            <FlexJustifyCenter sx={{ my: 2 }}>
              <IconButton onClick={handleScroll}>
                <KeyboardDoubleArrowDownRoundedIcon />
              </IconButton>
            </FlexJustifyCenter>
          </motion.div>
        </Box>
      </Box>
    </Section>
  );
};

export default Hero;
