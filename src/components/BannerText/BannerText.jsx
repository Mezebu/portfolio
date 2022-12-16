import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web } from "../../assets";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(40px, 8vw, 80px)",
          fontFamily: "Playfair Display",
          fontWeight: 600,
        }}
        align="center"
      >
        HENRY EZEIGWE
      </Typography>
    </Box>
  );
};

export default BannerText;
