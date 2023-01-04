import { Grid, Toolbar, Box, Container } from "@mui/material";

import Copyright from "../../components/Copyright/Copyright";
import Link from "../../Link";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import Socials from "../../components/Socials/Socials";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Toolbar />
      <SectionHeader subTitle="Get in touch" title="CONTACT" />

      <Grid container sx={{ my: 5 }} spacing={2}>
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
