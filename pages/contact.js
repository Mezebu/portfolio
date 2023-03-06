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
        <FlexJustifyCenter>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{ fontWeight: 600, maxWidth: 300, mb: 2 }}
          >
            Got ideas? Send me an email, {"I'd"} love to collaborate.
          </Typography>
        </FlexJustifyCenter>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6}>
            <ContactForm />
          </Grid>
          <Grid item lg={6} md={6}>
            <Box>
              <Box sx={{ mt: 1 }}>
                <Typography color="text.secondary" variant="body1">
                  SOCIAL MEDIA
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Link href="#" color="inherit" sx={{ fontWeight: "500" }}>
                  LinkedIn
                </Link>{" "}
                -{" "}
                <Link href="#" color="inherit" sx={{ fontWeight: "500" }}>
                  GITHUB
                </Link>{" "}
                -{" "}
                <Link href="#" color="inherit" sx={{ fontWeight: "500" }}>
                  TWITTER
                </Link>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography color="text.secondary" variant="body1">
                  Email
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Link href="#" color="inherit" sx={{ fontWeight: "500" }}>
                  mezebu07@gmail.com
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Toolbar />
      </Box>
    </Fragment>
  );
};

export default Contact;
