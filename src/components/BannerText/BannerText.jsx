import { Box, Grid, Typography } from "@mui/material";
import { StyledBannerText } from "./styles";
import { rocket, wave, web } from "../../assets";
import { StyledDate } from "../../Sections/Hero/styles";
import { FlexCenter } from "../../../styles/globalStyles";

const BannerText = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box>
        <StyledDate
          variant="button"
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          ©{new Date().getFullYear()}
        </StyledDate>
      </Box>

      <Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={700}>
            Hi, my name is
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "clamp(35px, 8vw, 80px)",
              fontFamily: "Raleway",
            }}
            fontWeight={500}
          >
            Henry Ezeigwe.
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "clamp(35px, 6vw, 80px)" }}
            fontWeight={600}
          >
            I build things for the web.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerText;
