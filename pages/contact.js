import { Box, Grid, Toolbar } from "@mui/material";

import SectionHeader from "../src/components/SectionHeader/SectionHeader";
import ContactForm from "../src/components/ContactForm/ContactForm";
import Socials from "../src/components/Socials/Socials";
import { Fragment } from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Ezeigwe Henry | Contact Me</title>
      </Head>
      <Box>
        <SectionHeader subTitle="Get in touch" title="CONTACT" />
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
