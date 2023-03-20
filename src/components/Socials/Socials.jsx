import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/legacy/image";

import { FlexJustifyCenter } from "../../../styles/globalStyles";
import { StyledLinks } from "./styles";

const Socials = () => {
  return (
    <Box>
      <FlexJustifyCenter>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, maxWidth: 300, mb: 2 }}
        >
          You could also connect with me through other social networking sites.
        </Typography>
      </FlexJustifyCenter>
      <Grid container sx={{ px: { sm: 7 }, mt: 0.7 }}>
        test
      </Grid>
    </Box>
  );
};

export default Socials;
