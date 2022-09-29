import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Image from "next/image";

import { StyledDate, StyledGreyDot, StyledText, StyledWrapper } from "./styles";
import {
  O,
  P,
  ArrowDown,
  rocket,
  twist,
  sphere,
  wave,
  multiDot,
} from "../../assets";
import { FlexJustifyCenter, FlexSpaceBtween } from "../../../styles";
import AnimateText from "../../components/FramerAnimations/AnimateText";
import Section from "../../components/Section/Section";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Section id="hero" component="section">
      <Grid container>
        <Grid item lg={8}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledDate variant="button">
              ©{new Date().getFullYear()}
            </StyledDate>
          </Box>
        </Grid>

        <Grid item lg={4}>
          <Box sx={{ position: "absolute", right: 190, top: 290 }}>
            <Image src={sphere} alt="image" height={200} width={200} />
          </Box>
          <Box sx={{ position: "relative" }}>
            <Image src={twist} alt="image" layout="intrinsic" />
          </Box>
          <StyledGreyDot />
        </Grid>
      </Grid>
      {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Image src={ArrowDown} alt="image" height="100px" width="100px" />
        </Box> */}
      <FlexSpaceBtween>
        <BlurOnIcon sx={{ fontSize: 50 }} />
      </FlexSpaceBtween>
      <FlexJustifyCenter>
        <AnimateText
          text="Hi! I'm Ezeigwe Henry, I Code Cool Websites"
          variant="h6"
          fontWeight={800}
          fontSize={30}
          letterSpacing={3}
        />
      </FlexJustifyCenter>
    </Section>
  );
};

export default Hero;
