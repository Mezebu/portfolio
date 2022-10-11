import { Box, Grid } from "@mui/material";
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

const Hero = () => {
  return (
    <Section id="hero" component="section">
      <Box component="article">
        <Grid container>
          {/*prettier-ignore*/}
          <Grid item lg={5} md={5} sm={5} sx={{ display: { xs: "none", md: "block" } }}>     
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
        <motion.div
          initial={{ opacity: 0, y: -250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, type: "tween" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 2,
              cursor: "pointer",
            }}
            component={Link}
            to="about"
            smooth={true}
            offset={-120}
            spy={true}
          >
            <KeyboardDoubleArrowDownRoundedIcon />
          </Box>
        </motion.div>
      </Box>
    </Section>
  );
};

export default Hero;
