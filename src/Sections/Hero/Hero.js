import React, { useRef } from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";

import { StyledDate, StyledGreyDot, StyledText, StyledWrapper } from "./styles";
import { OIcon, PIcon, ArrowDown } from "../../assets";
import { FlexJustifyCenter, FlexSpaceBtween } from "../../../styles";
import AnimateText from "../../../components/FramerAnimations/AnimateText";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.9,
      },
    },
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delay: 0.5,
        duration: 1,
        delayChildren: 0.9,
      },
    },
  };

  return (
    <Container>
      <StyledWrapper id="hero" sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledDate variant="button">©{new Date().getFullYear()}</StyledDate>
        </Box>
        <Box
          component={motion.div}
          initial="hidden"
          variants={container}
          animate="visible"
        >
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }} component={motion.div} variants={item}>
           Fr<Image src={OIcon} alt="image" height={isMobile ? 33 : 83} width={isMobile ? 33 : 85}/>ntend
          </StyledText>
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }} component={motion.div} variants={item}>
            Develo<Image src={PIcon} alt="image" height={isMobile ? 35 : 95} width={isMobile ? 40 : 105}/>er
          </StyledText>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Image src={ArrowDown} alt="image" height="100px" width="100px" />
        </Box>
        <StyledGreyDot />
      </StyledWrapper>
      <FlexSpaceBtween>
        <BlurOnIcon sx={{ fontSize: 50 }} />
      </FlexSpaceBtween>
      <FlexJustifyCenter ref={ref}>
        {isInView && (
          <AnimateText
            text="Hi! I'm Ezeigwe Henry, I Code Cool Websites"
            variant="h4"
            fontWeight={700}
            fontFamily="Josefin Slab"
          />
        )}
      </FlexJustifyCenter>
    </Container>
  );
};

export default Hero;
