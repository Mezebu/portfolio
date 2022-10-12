import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web } from "../../assets";
import Image from "next/image";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sx={{ marginTop: { xs: 0, sm: 5, lg: 8 } }}>
        <Grid item md={12} sm={12} xs={12}>
          <FlexCenter>
            <Box sx={{ position: "absolute", right: 1140, bottom: 150 }}>
              <StyledDate
                variant="button"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                ©{new Date().getFullYear()}
              </StyledDate>
            </Box>

            <Box>
              <StyledBannerText sx={{ mr: 1 }}>Frontend</StyledBannerText>
            </Box>
            <Box sx={{ width: "7vw" }}>
              <Image src={rocket} alt="rocket-icon" layout="responsive" />
            </Box>
          </FlexCenter>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <FlexCenter>
            <Typography>test</Typography>
            <Box>
              <StyledBannerText sx={{ ml: 2 }}>Developer</StyledBannerText>
            </Box>
          </FlexCenter>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerText;
