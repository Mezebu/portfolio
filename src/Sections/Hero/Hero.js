import { Box, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box sx={{ height: { xs: "85vh", md: "80vh" } }}>
      <Box
        component="section"
        sx={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <Typography>FRONTEND</Typography>
        <Typography>DEVELOPER</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
