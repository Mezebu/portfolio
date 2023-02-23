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

        <ContactForm />

        <Toolbar />
      </Box>
    </Fragment>
  );
};

export default Contact;
