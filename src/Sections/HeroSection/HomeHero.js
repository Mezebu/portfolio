import React from "react";
import { Box, Container, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-scroll";
import Image from "next/image";

import { dot, OIcon, PIcon, ArrowDown, multiDot } from "../../assets";
import { StyledDate, StyledGreyDot, StyledText, StyledWrapper } from "./styles";
import { FlexSpaceBtween } from "../../../styles/globalStyles";

const HomeHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Toolbar />
      <StyledWrapper id="hero">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledDate variant="button">©{new Date().getFullYear()}</StyledDate>
        </Box>
        <Box>
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }}>
            Fr<Image src={OIcon} alt="image" height={isMobile ? 33 : 83} width={isMobile ? 33 : 85}/>ntend
          </StyledText>
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }}>
            Develo<Image src={PIcon} alt="image" height={isMobile ? 35 : 95} width={isMobile ? 40 : 105}/>er
           </StyledText>
        </Box>
        <Box
          component={Link}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <Image
            src={ArrowDown}
            alt="image"
            height="100px"
            width="100px"
            style={{ cursor: "pointer" }}
          />
        </Box>
        <StyledGreyDot />
      </StyledWrapper>
      <FlexSpaceBtween>
        <Image src={multiDot} alt="dots" height={40} width={40} />
        <Image src={dot} alt="dots" height={40} width={40} />
      </FlexSpaceBtween>
    </Container>
  );
};

export default HomeHero;
