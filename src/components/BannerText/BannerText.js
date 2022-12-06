import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web } from "../../assets";
import Image from "next/image";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* <Box sx={{ position: "absolute", right: 100, bottom: 350 }}>
        <StyledDate
          variant="button"
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          ©{new Date().getFullYear()}
        </StyledDate>
      </Box> */}

      <Box>
        <StyledBannerText>Frontend</StyledBannerText>
        <StyledBannerText>Developer</StyledBannerText>
      </Box>
    </Box>
  );
};

export default BannerText;
