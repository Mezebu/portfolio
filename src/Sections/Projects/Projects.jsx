import { Box, Toolbar, Typography } from "@mui/material";

const Works = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: 11, letterSpacing: 3 }}
          color="text.secondary"
          variant="button"
        >
          My Work
        </Typography>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          RECENT WORKS
        </Typography>
      </Box>

      <Toolbar />
    </>
  );
};

export default Works;
