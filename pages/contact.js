import Head from "next/head";
import { Fragment } from "react";
import { Box, Grid, Link, Toolbar, Typography } from "@mui/material";

import Socials from "../src/components/Socials/Socials";
import ContactForm from "../src/components/ContactForm/ContactForm";
import { FlexJustifyCenter } from "../styles/globalStyles";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Contact Me</title>
      </Head>
      <Box>
        <Typography
          sx={{ fontSize: 11, letterSpacing: 3 }}
          color="text.secondary"
          variant="subtitle2"
          align="center"
        >
          Get In Touch
        </Typography>
        <Typography
          align="center"
          sx={{ fontWeight: 700, letterSpacing: 3 }}
          variant="h6"
        >
          CONTACT
        </Typography>

        <Toolbar />

        <Grid container spacing={4}>
          <Grid item lg={6} md={6}>
            <Socials />
          </Grid>
          <Grid item lg={6} md={6}>
            <ContactForm />
          </Grid>
        </Grid>

        <Toolbar />
      </Box>
    </Fragment>
  );
};

export default Contact;
