import { Box, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { henry } from "../../assets";
import BannerText from "../../components/BannerText/BannerText";

const Hero = () => {
  return (
    <Box
      sx={{ maxWidth: { xs: 350, sm: 500 }, margin: "auto", height: "82vh" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(14px, 5vw, 16px)",
          fontWeight: 600,
          fontFamily: "montserrat",
        }}
        align="center"
      >
        Hi, my name is
      </Typography>
      <Image
        src={henry}
        alt="computer illustration"
        layout="responsive"
        loading="lazy"
      />
    </Box>
  );
};

export default Hero;
