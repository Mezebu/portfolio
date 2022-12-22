import { Box, Grid, Typography } from "@mui/material";
import { FlexSpaceBtween } from "../../../styles/globalStyles";

import Banner from "../../components/Banner/Banner";
import HeroAccordion from "../../components/HeroAccordion/HeroAccordion";
import { StyledBigHeading, StyledIcon } from "./styles";

const Hero = () => {
  return (
    <Box sx={{ height: "83vh" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(12px, 4vw, 16px)",
          fontWeight: 600,
        }}
        align="center"
      >
        Hi, my name is
      </Typography>
      <Banner />
      <StyledBigHeading variant="h2" align="center">
        I build clean and simple websites with unique designs.
      </StyledBigHeading>

      <Grid container>
        <Grid item lg={6} md={6} xs={12}>
          <HeroAccordion />
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            scroll down
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
