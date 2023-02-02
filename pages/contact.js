import Head from "next/head";
import { Fragment } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

import Socials from "../src/components/Socials/Socials";
import ContactForm from "../src/components/ContactForm/ContactForm";

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
          variant="button"
        >
          Get In Touch
        </Typography>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          CONTACT
        </Typography>
        <Toolbar />

        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ContactForm />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Socials />
          </Grid>
        </Grid>
        <Toolbar />
      </Box>
    </Fragment>
  );
};

export default Contact;
