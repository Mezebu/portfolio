import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave } from "../../assets";
import Image from "next/image";
import { StyledDate } from "../../Sections/Hero/styles";

const BannerText = () => {
  return (
    <Grid container sx={{ marginTop: { xs: 0, sm: 5, lg: 8 } }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <StyledBannerText component="article" sx={{ mr: 1 }}>
              Frontend
            </StyledBannerText>
          </Box>
          <Box sx={{ width: "6vw" }}>
            <Image src={rocket} alt="rocket-icon" layout="responsive" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "7vw" }}>
            <StyledDate
              variant="button"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              ©{new Date().getFullYear()}
            </StyledDate>
          </Box>
          <Box>
            <StyledBannerText component="article" sx={{ ml: 2 }}>
              Developer
            </StyledBannerText>
          </Box>
        </Box>
      </Grid>

      {/* <StyledDate
          variant="button"
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          ©{new Date().getFullYear()}
        </StyledDate> */}
    </Grid>
  );
};

export default BannerText;
