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
        <Box
          sx={{
            display: {
              xs: "flex",
              alignItems: "center",
              flexDirection: "column",
              md: "block",
            },
          }}
        >
          <Typography
            sx={{ fontSize: 11, letterSpacing: 3 }}
            color="text.secondary"
            variant="subtitle2"
          >
            Get In Touch
          </Typography>
          <Typography sx={{ fontWeight: 700, letterSpacing: 2 }} variant="h6">
            {"I'D"} LOVE TO COLLABORATE
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography sx={{ fontWeight: 500 }} variant="body1">
            Thank you for taking the time to browse through my work. If you have
            any questions or comments about my projects, please feel free to
            reach out to me using the contact form and links below. I would be
            more than happy to discuss my work and answer any questions you may
            have. Thank you for your interest in my portfolio, and I look
            forward to hearing from you soon.
          </Typography>
        </Box>

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
