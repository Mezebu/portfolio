import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";

import { StyledUnderline } from "./styles";

const About = () => {
  return (
    <Box component="section" id="about">
      <Container maxWidth="lg">
        <Toolbar />
        <Typography
          sx={{ fontSize: 11, letterSpacing: 3 }}
          color="text.secondary"
          variant="button"
        >
          About
        </Typography>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          A LITTLE ABOUT ME
        </Typography>
        <Box>
          <Toolbar />
          {[...new Array(4)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}

          {/* <Grid container>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Typography>
                {[...new Array(4)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={4} md={2} sm={12} xs={12} />
            <Grid item lg={8} md={10} sm={12} xs={12}>
              <Typography>
                {[...new Array(4)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </Typography>
            </Grid>
          </Grid> */}
        </Box>

        <Toolbar />
      </Container>
    </Box>
  );
};

export default About;
