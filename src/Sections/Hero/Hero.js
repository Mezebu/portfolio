import { Box, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { mockup } from "../../assets";

const Hero = () => {
  return (
    <Box sx={{ height: { xs: "85vh", md: "80vh" } }}>
      <Box>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <Typography>Frontend</Typography>
            <Typography>Developer</Typography>
          </Grid>
          <Grid item lg={6}>
            <Image src={mockup} alt="mockup" layout="responsive" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
