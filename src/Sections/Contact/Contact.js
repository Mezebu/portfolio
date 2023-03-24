import { Grid, Toolbar, Container, Box, Typography } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import Socials from "../../components/Socials/Socials";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <SectionHeader subTitle="Get in touch" title="CONTACT" />

      <Box sx={{ mb: 5 }}>
        <Typography sx={{ fontWeight: 700, letterSpacing: 3 }} variant="h6">
          GOT IDEAS?
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="body1">
          Get in touch, {"I'd"} love to collaborate.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ContactForm />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Socials />
        </Grid>
      </Grid>
      <Toolbar />
    </Container>
  );
};

export default Contact;
