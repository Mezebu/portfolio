import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";

import { StyledDate, StyledGreyDot, StyledText, StyledWrapper } from "./styles";
import { O, P, ArrowDown } from "../../assets";
import { FlexJustifyCenter, FlexSpaceBtween } from "../../../styles";
import AnimateText from "../../components/FramerAnimations/AnimateText";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <StyledWrapper id="hero" sx={{ mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledDate variant="button">©{new Date().getFullYear()}</StyledDate>
        </Box>
        <Box>
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }}>
           Fr<Image src={O} alt="image" height={isMobile ? 33 : 83} width={isMobile ? 33 : 85}/>ntend
          </StyledText>
          {/* prettier-ignore */}
          <StyledText sx={{ fontSize: isMobile ? 60 : 150 }}>
            Develo<Image src={P} alt="image" height={isMobile ? 35 : 95} width={isMobile ? 40 : 105}/>er
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
      <FlexJustifyCenter>
        <AnimateText
          text="Hi! I'm Ezeigwe Henry, I Code Cool Websites"
          variant="h4"
          fontWeight={700}
          fontFamily="Josefin Slab"
        />
      </FlexJustifyCenter>
    </Container>
  );
};

export default Hero;
