import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";

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
          <StyledBannerText sx={{ mr: 1 }}>Frontend</StyledBannerText>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ fontSize: 11, fontWeight: 600, fontFamily: "Montserrat" }}
          >
            -- {"I'm Henry Ezeigwe"} --
          </Typography>
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
          <Typography
            variant="subtitle2"
            component="span"
            sx={{ fontSize: 11, fontWeight: 600, fontFamily: "Montserrat" }}
          >
            {"I have a passion for crafting experiences that users rave about"}
          </Typography>
          <StyledBannerText sx={{ ml: 2 }}>Developer</StyledBannerText>
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
