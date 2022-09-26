import { Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { StyledAboutWrapper, StyledUnderline } from "./styles";

const About = () => {
  return (
    <StyledAboutWrapper component="section" id="about">
      <Container maxWidth="lg">
        <Toolbar />

        <Typography variant="h6" align="center">
          A LITTLE ABOUT ME
        </Typography>
        <StyledUnderline sx={{ my: 3 }}>
          <KeyboardArrowDownRoundedIcon />
        </StyledUnderline>

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
        <Toolbar />
      </Container>
    </StyledAboutWrapper>
  );
};

export default About;
