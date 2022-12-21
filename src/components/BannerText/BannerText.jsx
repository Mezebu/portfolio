import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web, henry } from "../../assets";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontSize: "clamp(14px, 5vw, 16px)", fontWeight: 500 }}
      >
        Hi, my name is
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: "clamp(20px, 6vw, 50px)",
          fontWeight: 700,
        }}
      >
        HENRY EZEIGWE
      </Typography>
      <Typography>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </Typography>
    </Box>
  );
};

export default BannerText;
