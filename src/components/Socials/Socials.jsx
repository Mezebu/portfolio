import { Box, Grid, Link, Typography } from "@mui/material";

import { StyledBox, StyledLinks } from "./styles";
import { data } from "./data";

const Socials = () => {
  return (
    <Grid container spacing={2}>
      {data.map(({ id, name, link, icon }) => (
        <Grid key={id} item xs={4} md={6}>
          <StyledLinks
            href={link}
            fullWidth
            size="large"
            component={Link}
            target="_blank"
            rel="noreferrer"
          >
            <StyledBox>
              <Box>{icon}</Box>
              <Typography color="text.primary" sx={{ fontWeight: "500" }}>
                {name}
              </Typography>
            </StyledBox>
          </StyledLinks>
        </Grid>
      ))}
    </Grid>
  );
};

export default Socials;
