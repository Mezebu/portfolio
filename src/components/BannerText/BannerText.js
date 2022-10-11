import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web } from "../../assets";
import Image from "next/image";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <>
      <Grid container sx={{ marginTop: { xs: 0, sm: 5, lg: 8 } }}>
        <Grid item xs={12}>
          <FlexCenter>
            <Box>
              <StyledBannerText sx={{ mr: 1 }}>Frontend</StyledBannerText>
            </Box>
            <Box sx={{ width: "7vw" }}>
              <Image src={rocket} alt="rocket-icon" layout="responsive" />
            </Box>
          </FlexCenter>
        </Grid>
        <Grid item xs={12}>
          <FlexCenter>
            <Box sx={{ position: "relative", right: 500, bottom: 100 }}>
              <StyledDate
                variant="button"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                ©{new Date().getFullYear()}
              </StyledDate>
            </Box>
            <Typography>test</Typography>
            <Box>
              <StyledBannerText sx={{ ml: 2 }}>Developer</StyledBannerText>
            </Box>
          </FlexCenter>
        </Grid>
      </Grid>
    </>
  );
};

export default BannerText;
